import React from "react";
import useGameTrailers from "../hooks/useGameTrailers";
import { Text } from "@chakra-ui/react";

const GameTrailer = ({ slug }: { slug: string }) => {
  const { data } = useGameTrailers(slug);
  const first = data?.results[0];

  if (!first) return null;
  return (
    <video
      width="100%"
      src={data?.results[0].data[480]}
      poster={first?.preview}
      controls
    ></video>
  );
};

export default GameTrailer;
