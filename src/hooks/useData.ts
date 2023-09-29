import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


interface FetchGenresResponse<T> {
  count: number;
  results: T[];
}
export const useData = <T>(endpoint : string) => {
    const [datas, setDatas] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
    
    useEffect(() => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<FetchGenresResponse<T>>(endpoint, { signal: controller.signal })
        .then((res) => {
          setDatas(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
    
      return () => controller.abort();
    }, []);
    
    return { datas, error, isLoading };

}

export default useData;