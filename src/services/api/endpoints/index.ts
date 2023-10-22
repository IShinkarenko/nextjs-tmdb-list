import {DESC_ORDER} from "@/src/constant/common-constants";
import {PopularMoviesList} from "@/src/services/api/types";

import axiosInstance from '../axios';

export default {
  getPopularMovies: async ({
     page = 1,
     sortOrder = DESC_ORDER,
     sortCriteria = 'vote_average'
  }): Promise<PopularMoviesList> => {
    const searchParams = new URLSearchParams({
      include_adult: false.toString(),
      language: 'en-US',
      page: page.toString(),
      sort_by: `${sortCriteria}.${sortOrder.toLowerCase()}`,
      'vote_count.gte': (200).toString(),
      include_video: false.toString(),
    });

    const response = await axiosInstance.get(`/discover/movie?${searchParams}`);

    return response.data;
  },
};