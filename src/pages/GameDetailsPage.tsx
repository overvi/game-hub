import { Box, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExtendText from "../Components/ExtendText";
import GameAttributes from "../Components/GameAttributes";
import useGamesDetails from "../hooks/useGamesDetails";
import GameTrailer from "../Components/GameTrailer";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGamesDetails(slug!);

  if (isLoading) return <Spinner />;

  if (error || !data) throw error;
  return (
    <>
      <Box padding={5}>
        <Heading marginY={5}>{data.name}</Heading>
        <ExtendText children={data.description_raw}></ExtendText>
        <GameAttributes game={data} />
        <GameTrailer slug={slug!} />
      </Box>
    </>
  );
};

export default GameDetailsPage;
