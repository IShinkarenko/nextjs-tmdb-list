import axios from 'axios';

import {MOVIE_DB_API_KEY, MOVIE_DB_API_URL} from "@/src/constant/common-constants";

const axiosInstance = axios.create({
  baseURL: MOVIE_DB_API_URL,
});

axiosInstance.interceptors.request.use((req) => {
  if (MOVIE_DB_API_KEY) {
    req.headers.Authorization = `Bearer ${MOVIE_DB_API_KEY}`;
  }

  return req;
});

axiosInstance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => Promise.reject(error),
);

export default axiosInstance;