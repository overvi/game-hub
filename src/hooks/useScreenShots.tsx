import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/api-client";

interface ScreenShots {
  id: number;
  image: string;
}

const useGamesScreenShots = (slug: string) => {
  const apiInstance = new APIclient<ScreenShots>(`/games/${slug}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", slug],
    queryFn: apiInstance.getAllData,
  });
};

export default useGamesScreenShots;
