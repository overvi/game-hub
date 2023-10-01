import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { datas, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return error && <Text>{error}</Text>;
  return (
    <SimpleGrid padding={4} columns={{ sm: 1, md: 2, lg: 3 }} spacing={6}>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {datas.map((data) => (
        <GameCardContainer key={data.id}>
          <GameCard game={data} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
