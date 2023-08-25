import React, { PropsWithChildren, useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface GameGridProps {}

interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
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
const GameGrid = ({}: PropsWithChildren<GameGridProps>) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<GameObj>("/games")
      .then(({ data }) => setGames(data.results))
      .catch((e) => setError(e.message));
  });
  return (
    <div>
      <h2>Games</h2>
      {error && <Text color={"red.200"}>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameGrid;
