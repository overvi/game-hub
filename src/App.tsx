import React from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import theme from "./theme";

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
      <GridItem area={"main"}>Main</GridItem>
      <Show above="lg">
        <GridItem area={"aside"}>Aside</GridItem>
      </Show>
    </Grid>
  );
};

export default App;
