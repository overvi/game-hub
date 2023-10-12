import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import useGameQueryStore from "../client/gameQueryStore";
import APIclient, { FetchGenresResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";
import { Genre } from "./useGenres";
import { Publishers } from "../entities/publishers";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  page: number;
  page_size: number;
  slug: string;
  rating: number;
  description_raw: string;
  genres: Genre[];
  publishers: Publishers[];
  preview: string;
}

const fetchGame = new APIclient<Game>("/games");
const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<FetchGenresResponse<Game>, Error>({
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
    staleTime: ms("24h"),
  });
};

export default useGames;
