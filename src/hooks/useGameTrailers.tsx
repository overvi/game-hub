import { useQuery } from "@tanstack/react-query";
import APIclient, {
  FetchGenresResponse,
  axiosInstance,
} from "../services/api-client";

interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}

const useGameTrailers = (slug: string) => {
  const apiInstance = new APIclient<Trailer>(`/games/${slug}/movies`);
  return useQuery({
    queryKey: ["trailers", slug],
    queryFn: apiInstance.getAllData,
  });
};

export default useGameTrailers;
