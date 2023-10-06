import { useQuery } from "@tanstack/react-query";
import useData, { FetchGenresResponse } from "./useData";
import apiClient from "../services/api-client";
import platforms from "../data/platforms";

interface Platform {
    id :number;
    name : string;
    slug : string;
}

const usePlatforms = () => useQuery({
    queryKey : ['platforms'],
    queryFn : () => apiClient
    .get<FetchGenresResponse<Platform>>('/platforms')
    .then(res => res.data.results),

    staleTime : 24 * 60 * 60 * 1000,
    initialData : platforms.results
})




export default usePlatforms;