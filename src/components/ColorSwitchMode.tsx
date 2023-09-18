import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

interface ColorSwitchModeProps {}
const ColorSwitchMode = ({}: PropsWithChildren<ColorSwitchModeProps>) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme={"cyan"}
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text whiteSpace={"nowrap"}>
        {colorMode === "dark" ? "Dark" : "Light"} Mode
      </Text>
    </HStack>
  );
};

export default ColorSwitchMode;
