import { useParams } from "react-router-dom";
import useGamesDetails from "../hooks/useGamesDetails";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";

const GameDetailsPage = () => {
  const params = useParams();
  const { data, isLoading, error } = useGamesDetails(params.slug!);

  if (isLoading) return <Spinner />;

  if (error || !data) throw error;
  return (
    <>
      <Box padding={5}>
        <Heading marginY={5}>{data.name}</Heading>
        <Text>{data.description_raw}</Text>
      </Box>
    </>
  );
};

export default GameDetailsPage;
