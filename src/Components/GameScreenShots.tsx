import React from "react";
import useGamesScreenShots from "../hooks/useScreenShots";
import { Grid, Img, SimpleGrid } from "@chakra-ui/react";
import GameCardSkeleton from "./GameCardSkeleton";

const GameScreenShots = ({ slug }: { slug: string }) => {
  const { data } = useGamesScreenShots(slug);
  return (
    <SimpleGrid columns={{ sm: 1, xl: 2 }}>
      {data?.results.map((img) => (
        <Img key={img.id} padding={4} src={img.image}></Img>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;
