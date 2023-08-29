import { FunctionComponent, useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}
interface GameObj {
  count: number;
  description: string;
  results: Game[];
  length: number;

  seo_description: string;
  seo_h1: string;
  seo_keywords: string;
  seo_title: string;
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<GameObj>("/games", { signal: controller.signal })
      .then(({ data }) => setGames(data.results))
      .catch((e) => {
        if (e instanceof CanceledError) return;
        setError(e.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
