import { Box } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

interface GameCardContainerProps {}
const GameCardContainer = ({
  children,
}: PropsWithChildren<GameCardContainerProps>) => {
  return (
    <Box
      overflow={"hidden"}
      minHeight={"350px"}
      width={"300px"}
      borderRadius={10}
      cursor={"pointer"}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
