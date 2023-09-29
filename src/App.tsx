import React from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";

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
      <GridItem area={"main"} bg={"gold"}>
        Main
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bg={"dodgerblue"}>
          Aside
        </GridItem>
      </Show>
    </Grid>
  );
};

export default App;
