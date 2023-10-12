import { useQuery } from "@tanstack/react-query";
import APIclient, { axiosInstance } from "../services/api-client";
import { Game } from "./useGames";

const useGamesDetails = (slug: string) => {
  const apiInstance = new APIclient<Game>("/games");
  return useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiInstance.getDetails(slug),
  });
};

export default useGamesDetails;
