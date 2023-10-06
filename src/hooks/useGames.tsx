import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIclient, { FetchGenresResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const fetchGame = new APIclient<Game>("/games");
const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchGenresResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      fetchGame.getAllData({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
  });

export default useGames;
