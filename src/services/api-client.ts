import axios, { AxiosRequestConfig } from "axios"

export interface FetchGenresResponse<T> {
    count: number;
    results: T[];
  }


export const axiosInstance = axios.create ({
    baseURL : "https://api.rawg.io/api",
    params : {
        key : "81ad36c6d2554322a74a092c17d08047"
    }
})

class APIclient<T> {
    constructor(public endPoint : string) {}

    getAllData = (config : AxiosRequestConfig) => {
      return axiosInstance
        .get<FetchGenresResponse<T>>(this.endPoint , config)
        .then(res => res.data)
    }

    getDetails = (slug : string | number) => {
      return axiosInstance
      .get<T>(this.endPoint + '/' + slug)
      .then(res => res.data)
    }
}

export default APIclient;