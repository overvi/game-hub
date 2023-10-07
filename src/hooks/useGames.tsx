import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIclient, { FetchGenresResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";
import InfiniteScroll from "react-infinite-scroll-component";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  page: number;
  page_size: number;
}

const fetchGame = new APIclient<Game>("/games");
const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchGenresResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      fetchGame.getAllData({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
          page_size: 33,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.results.length > 0 ? allPages.length + 1 : undefined;
    },
    staleTime: 60 * 24 * 24 * 1000,
  });

export default useGames;
