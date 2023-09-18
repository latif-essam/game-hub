import { HStack, Image } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import logo from "../assets/logo.webp";
import ColorSwitchMode from "./ColorSwitchMode";
import SearchInput from "./SearchInput";
interface NavBarProps {
  onSearch: (search: string) => void;
}
const NavBar = ({ onSearch }: PropsWithChildren<NavBarProps>) => {
  return (
    <HStack padding={"10px"}>
      <Image src={logo} boxSize={"60px"} />
      <SearchInput onSearch={onSearch} />
      <ColorSwitchMode />
    </HStack>
  );
};

export default NavBar;
