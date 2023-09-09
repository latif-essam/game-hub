import React, { PropsWithChildren } from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImgUrl from "../services/getCroppedImgUrl";

interface GameCardProps {
  game: Game;
}
const GameCard = ({ game }: PropsWithChildren<GameCardProps>) => {
  return (
    <Card minHeight={"100%"}>
      <Image
        src={
          game.background_image ? getCroppedImgUrl(game.background_image) : ""
        }
      />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>

        <HStack justifyContent={"space-between"}>
          <PlatformIconList platforms={game.parent_platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
