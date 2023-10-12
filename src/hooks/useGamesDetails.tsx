import { useQuery } from "@tanstack/react-query";
import APIclient, { axiosInstance } from "../services/api-client";

interface Details {
  name: string;
  rating: number;
  description_raw: string;
}

const useGamesDetails = (slug: string) => {
  const apiInstance = new APIclient<Details>(`games/${slug}`);
  return useQuery({
    queryKey: ["games"],
    queryFn: apiInstance.getAllData,
  });
};

export default useGamesDetails;
