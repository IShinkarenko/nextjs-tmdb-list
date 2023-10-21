import axiosInstance from '../axios';
import { Movie } from '../types';

export default {
  getMovies: async (queryString?: string): Promise<Record<string, string>> => {
    const response = await axiosInstance.get(`/movies?${queryString}`);

    return response.data;
  },
};
