import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./Components/GameGrid";
import GameHeading from "./Components/GameHeading";
import GenreList from "./Components/GenreList";
import NavBar from "./Components/NavBar";
import PlatformSelector from "./Components/PlatformSelector";
import SortSelector from "./Components/SortSelector";
import useGameQueryStore from "./client/gameQueryStore";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList></GenreList>
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={2}>
          <GameHeading />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector></PlatformSelector>
            </Box>
            <SortSelector></SortSelector>
          </Flex>
        </Box>
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
};

export default App;
