import React from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import theme from "./theme";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar></NavBar>
      </GridItem>
      <GridItem area={"main"}>
        <GameGrid></GameGrid>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}>
          <GenreList></GenreList>
        </GridItem>
      </Show>
    </Grid>
  );
};

export default App;
