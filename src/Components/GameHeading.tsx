import { Heading } from "@chakra-ui/react";

import { GameQuery } from "../App";
import Genres from "../data/genres";
import platforms from "../data/platforms";
import usePlatform from "../hooks/usePlatform";
import useGenres from "../hooks/useGenres";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const platform = usePlatform(gameQuery.platformId);
  const genres = useGenre(gameQuery.genreId);
  const heading = `${platform || ""} ${genres || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
