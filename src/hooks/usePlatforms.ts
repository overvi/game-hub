import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/api-client";
import platforms from "../data/platforms";

export interface Platform {
    id :number;
    name : string;
    slug : string;
}

const fetchPlatfrom = new APIclient<Platform>('/platforms')
const usePlatforms = () => useQuery({
    queryKey : ['platforms'],
    queryFn : fetchPlatfrom.getAllData, 
    staleTime : 20 * 60 * 60 * 1000, 
    initialData : {count : platforms.results.length , results : platforms.results}
})



export default usePlatforms;