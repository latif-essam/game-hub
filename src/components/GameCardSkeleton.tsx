import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface GameCardSkeletonProps {}
const GameCardSkeleton = ({}: PropsWithChildren<GameCardSkeletonProps>) => {
  return (
    <Card height={"350px"}>
      <Skeleton height={"60%"} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
