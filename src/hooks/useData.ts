import { useQuery } from "@tanstack/react-query";
import { AxiosRequestConfig, CanceledError } from "axios";
import apiClient from "../services/api-client";
import { FetchGenresResponse } from "../services/api-client";


const controller = new AbortController()
  const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => 
  useQuery<FetchGenresResponse<T> , Error>({
    queryKey: deps ? [...deps] : [],
    queryFn: () =>
      apiClient
        .get<FetchGenresResponse<T>>(endpoint , {signal : controller.signal , ...requestConfig})
        .then((res) => res.data),
    onError: (error) => {
      if (error instanceof CanceledError) {
        controller.abort();
      }
    }
  });


export default useData;
