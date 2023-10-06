import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import axios from "axios";
import apiClient from "../services/api-client";
import { FetchGenresResponse } from "./useData";

export interface Genre {
    id :number;
    name : string;
    image_background : string;
}
const useGenres = () => 
  useQuery({
    queryKey : ['genres'],
    queryFn : () =>  apiClient
      .get<FetchGenresResponse<Genre>>('/genres')
      .then(res => res.data),

    staleTime : 24 * 60 * 60 * 1000,
    initialData : { count : genres.results.length , results : genres.results }
        
   })


export default useGenres;