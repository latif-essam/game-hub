import { PropsWithChildren } from "react";

import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";
import { GameQuery } from "../App";

interface GameGridProps {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: PropsWithChildren<GameGridProps>) => {
  const { data: games, error, isLoading } = useGames(gameQuery);
  if (
    (gameQuery.genre && games.length === 0) ||
    (gameQuery.platform && games.length === 0)
  )
    return <Text>No games to show?? Try different Filters </Text>;

  return (
    <>
      {error && <Text color={"red.200"}>{error}</Text>}
      <SimpleGrid
        minChildWidth={"300px"}
        padding={"5px"}
        column={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 5,
        }}
        spacing={3}
      >
        {isLoading &&
          [1, 2, 3, 4, 5, 6].map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
