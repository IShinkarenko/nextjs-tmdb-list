import axiosInstance from '../axios';

export default {
  getMovies: async () => {
    return axiosInstance.get(`/account/login`);
  },
};
