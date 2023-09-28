import React from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"} bg={"red"}>
        Nav
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
