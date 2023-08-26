import { PropsWithChildren } from "react";

import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

interface GameGridProps {}

const GameGrid = ({}: PropsWithChildren<GameGridProps>) => {
  const { games, error } = useGames();

  return (
    <>
      {/* <h2>Games</h2> */}
      {error && <Text color={"red.200"}>{error}</Text>}
      <SimpleGrid
        minChildWidth={"300px"}
        padding={"10px"}
        column={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 5,
        }}
        spacing={"10px"}
      >
        {games.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
