import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/api-client";
import genres from "../data/genres";
import ms from 'ms'
import platforms from "../data/platforms";

export interface Genre {
    id :number;
    name : string;
    image_background : string;
}

const fetchGenre = new APIclient<Genre>('/genres')
const useGenres = () => useQuery({
    queryKey : ['genres'],
    queryFn : fetchGenre.getAllData,

    staleTime : ms('24h'),
    initialData : {count : genres.results.length , results : genres.results , }
    
})


export default useGenres;