import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface GameCardSkeletonProps {}
const GameCardSkeleton = ({}: PropsWithChildren<GameCardSkeletonProps>) => {
  return (
    <Card marginBlock={4} borderRadius={10} width={"300px"} overflow={"hidden"}>
      <Skeleton height={200} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
