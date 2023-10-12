import React from "react";
import { Game } from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import DefinitionItems from "./DefinitionItems";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <>
      <SimpleGrid columns={2} as="dl">
        <DefinitionItems terms="Platforms">
          {game.parent_platforms.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
        </DefinitionItems>
        <DefinitionItems terms="MetaScore">
          <CriticScore score={game.metacritic} />
        </DefinitionItems>
        <DefinitionItems terms="Genre">
          {game.genres.map((genre) => (
            <Text key={genre.id}>{genre.name}</Text>
          ))}
        </DefinitionItems>
        <DefinitionItems terms="Publisher">
          {game.publishers.map((publisher) => (
            <Text key={publisher.id}>{publisher.name}</Text>
          ))}
        </DefinitionItems>
      </SimpleGrid>
    </>
  );
};

export default GameAttributes;
