import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/img-url";

interface Props {
  onSelectGenres: (genre: number) => void;
  selectedGenre?: number;
}

const GenreList = ({ onSelectGenres, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl">Genres</Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="8px">
            <HStack>
              <Image
                objectFit="cover"
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                textAlign="left"
                whiteSpace="normal"
                fontWeight={genre.id == selectedGenre ? "bold" : "normal"}
                onClick={() => onSelectGenres(genre.id)}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
