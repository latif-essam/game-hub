import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface SortSelectorProps {}

const SortSelector = ({}: SortSelectorProps) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevance {/* {selectedPlatform?.name || " Platforms"} */}
      </MenuButton>
      <MenuList>
        {/* {data.map((plaform) => (
        <MenuItem key={plaform.id} onClick={() => setPlatform(plaform)}>
          {plaform.name}
        </MenuItem>
      ))} */}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
