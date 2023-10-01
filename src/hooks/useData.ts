import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";


interface FetchGenresResponse<T> {
  count: number;
  results: T[];
}
export const useData = <T>(endpoint : string , requestConfig?: AxiosRequestConfig , deps? : any[]) => {
    const [datas, setDatas] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
    
    useEffect(() => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<FetchGenresResponse<T>>(endpoint, { signal: controller.signal , ...requestConfig })
        .then((res) => {
          setDatas(res.data.results);
          setLoading(false);
          console.log(res.data);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
    
      return () => controller.abort();
    }, deps ? [...deps] : []);
    
    return { datas, error, isLoading };

}

export default useData;