import { HStack, Image } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import logo from "../assets/logo.webp";
import ColorSwitchMode from "./ColorSwitchMode";
interface NavBarProps {}
const NavBar = ({}: PropsWithChildren<NavBarProps>) => {
  return (
    <HStack padding={"10px"} justifyContent={"space-between"}>
      <Image src={logo} boxSize={"60px"} />
      <ColorSwitchMode />
    </HStack>
  );
};

export default NavBar;
