import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/api-client";
import genres from "../data/genres";
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

    staleTime : 20 * 60 * 60 * 1000,
    initialData : {count : genres.results.length , results : genres.results , }
    
})


export default useGenres;