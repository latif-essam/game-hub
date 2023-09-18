import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

interface SearchInputProps {
  value?: string;
  onValueChange: (value: string) => void;
}

const SearchInput = ({ value, onValueChange }: SearchInputProps) => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        borderRadius={20}
        placeholder="Search games..."
        variant={"filled"}
        value={value}
        onChange={(e) => onValueChange(e.currentTarget.value)}
      />
    </InputGroup>
  );
};

export default SearchInput;
