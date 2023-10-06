import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
import { useQuery } from "@tanstack/react-query";

export interface FetchGenresResponse<T> {
  count: number;
  results: T[];
}
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
