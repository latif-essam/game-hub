import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImgUrl from "../services/getCroppedImgUrl";

interface GenreListProps {
  setGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ setGenre, selectedGenre }: GenreListProps) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map(({ id, name, image_background }, index) => (
        <ListItem key={id} paddingY={1.5}>
          <HStack>
            <Image
              borderRadius={8}
              boxSize={"33px"}
              src={getCroppedImgUrl(image_background)}
            />
            <Button
              fontWeight={selectedGenre?.id === id ? "bold" : "normal"}
              onClick={() => setGenre(data[index])}
              fontSize={"lg"}
              variant="link"
            >
              {name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
