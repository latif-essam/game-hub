import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImgUrl from "../services/getCroppedImgUrl";

interface GenreListProps {}

const GenreList = ({}: GenreListProps) => {
  const { data, isLoading, error } = useGenres();
  return (
    <List>
      {data.map(({ id, name, image_background }) => (
        <ListItem key={id} paddingY={1.5}>
          <HStack>
            <Image
              borderRadius={8}
              boxSize={"33px"}
              src={getCroppedImgUrl(image_background)}
            />
            <Text fontSize={"lg"}>{name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
