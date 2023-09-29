import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { datas, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        padding={4}
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              <GameCardContainer>
                <GameCardSkeleton key={skeleton} />
              </GameCardContainer>
            </GameCardContainer>
          ))}
        {datas.map((data) => (
          <GameCard key={data.id} game={data} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
