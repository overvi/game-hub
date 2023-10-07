import { Heading } from "@chakra-ui/react";

import { GameQuery } from "../App";
import Genres from "../data/genres";
import platforms from "../data/platforms";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const heading = `
  ${
    platforms.results.find((platform) => platform.id == gameQuery.platformId)
      ?.name || ""
  } ${
    Genres.results.find((genre) => genre.id == gameQuery.genreId)?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
