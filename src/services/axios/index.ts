import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.github.com',
});

axiosInstance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => Promise.reject(error),
);

export default axiosInstance;
