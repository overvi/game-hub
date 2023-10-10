import { Heading } from "@chakra-ui/react";

import useGameQueryStore from "../client/gameQueryStore";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
const GameHeading = () => {
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId || 0);

  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genres = useGenre(genreId || 0);

  const heading = `${platform || ""} ${genres || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
