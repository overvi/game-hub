import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./Components/GameGrid";
import GameHeading from "./Components/GameHeading";
import GenreList from "./Components/GenreList";
import NavBar from "./Components/NavBar";
import PlatformSelector from "./Components/PlatformSelector";
import SortSelector from "./Components/SortSelector";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        ></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genreId}
            onSelectGenres={(genreId) =>
              setGameQuery({ ...gameQuery, genreId })
            }
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
                selectedPlatform={gameQuery.platformId}
                onSelectPlatform={(platformId) =>
                  setGameQuery({ ...gameQuery, platformId })
                }
              ></PlatformSelector>
            </Box>
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectOrder={(sortOrder) => {
                setGameQuery({ ...gameQuery, sortOrder });
              }}
            ></SortSelector>
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
};

export default App;
