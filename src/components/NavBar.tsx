import { HStack, Image, Text } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import logo from "../assets/logo.webp";
interface NavBarProps {}
const NavBar = ({}: PropsWithChildren<NavBarProps>) => {
  return (
    <HStack>
      <Image src={logo} boxSize={"60px"} />
      <Text>navBar</Text>
    </HStack>
  );
};

export default NavBar;
