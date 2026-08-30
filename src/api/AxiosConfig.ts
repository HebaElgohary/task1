// services/axiosConfig.ts
import axios, {type AxiosInstance,  } from "axios";

/**
 * ===============================
 * Axios Instance
 * ===============================
 */
const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout:  15000,
  headers: {
    Accept: "application/json",
  },
});



export default axiosInstance;
