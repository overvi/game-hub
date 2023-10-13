import { Box, Heading, Spinner, SimpleGrid, GridItem } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExtendText from "../Components/ExtendText";
import GameAttributes from "../Components/GameAttributes";
import useGamesDetails from "../hooks/useGamesDetails";
import GameTrailer from "../Components/GameTrailer";
import GameScreenShots from "../Components/GameScreenShots";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGamesDetails(slug!);

  if (isLoading) return <Spinner />;

  if (error || !data) throw error;
  return (
    <>
      <SimpleGrid
        padding={5}
        spacing={5}
        marginY={5}
        columns={{ sm: 1, xl: 2 }}
      >
        <GridItem>
          <Heading>{data.name}</Heading>
          <ExtendText children={data.description_raw}></ExtendText>
          <GameAttributes game={data} />
        </GridItem>
        <GridItem>
          <GameTrailer slug={slug!} />
          <GameScreenShots slug={slug!} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailsPage;
