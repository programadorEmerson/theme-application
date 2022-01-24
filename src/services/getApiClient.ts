/* eslint-disable @typescript-eslint/no-explicit-any */
import { APIError } from 'types/axios';

import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios';

export const getAPIClient = (): AxiosInstance => {
  const api = axios.create({
    baseURL: 'http://localhost:3333',
  });

  api.interceptors.request.use((config: AxiosRequestConfig) => {
    // console.log('sucess interceptors.request: ', config);
    return config;
  });

  api.interceptors.response.use(
    (config: AxiosResponse) => {
      // console.log('sucess interceptors.response: ', config);
      return config;
    },
    (error: APIError) => {
      const { response } = error;
      // console.log('error interceptors.response: ', response);
    }
  );
  return api;
};
