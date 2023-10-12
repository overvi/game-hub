import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGamesDetails from "../hooks/useGamesDetails";
import ExtendText from "../Components/ExtendText";
import DefinitionItems from "../Components/DefinitionItems";
import useGames from "../hooks/useGames";
import CriticScore from "../Components/CriticScore";
import GameAttributes from "../Components/GameAttributes";

const GameDetailsPage = () => {
  const params = useParams();
  const { data, isLoading, error } = useGamesDetails(params.slug!);

  if (isLoading) return <Spinner />;

  if (error || !data) throw error;
  return (
    <>
      <Box padding={5}>
        <Heading marginY={5}>{data.name}</Heading>
        <ExtendText children={data.description_raw}></ExtendText>
        <GameAttributes game={data} />
      </Box>
    </>
  );
};

export default GameDetailsPage;
