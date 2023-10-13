import React from "react";
import useGameTrailers from "../hooks/useGameTrailers";
import { Text } from "@chakra-ui/react";

const GameTrailer = ({ slug }: { slug: string }) => {
  const { data } = useGameTrailers(slug);
  const first = data?.results[0];
  return first ? (
    <video src={first.data[480]} poster={first?.preview} controls></video>
  ) : null;
};

export default GameTrailer;
