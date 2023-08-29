import { PropsWithChildren } from "react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface PlatformIconListProps {
  platforms: { platform: Platform }[];
}

const PlatformIconList = ({
  platforms,
}: PropsWithChildren<PlatformIconListProps>) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    android: FaAndroid,
    mac: FaApple,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack marginTop={"10px"}>
      {platforms.map(({ platform }) => (
        <Icon
          color={"gray.500"}
          as={iconMap[platform.slug]}
          key={platform.id}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
