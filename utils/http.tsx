import axios from "axios";
import axiosRetry from "axios-retry";
import { BASE_URL } from "./constant";

const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosRetry(http, {
  retries: 2,
  retryDelay: (retryCount) => {
    return retryCount * 500;
  },
  retryCondition: (error: any) => {
    return error.response?.status === 401 && error.response?.data.logout;
  },
  onRetry(retryCount, error, requestConfig: any) {
    requestConfig.headers["Authorization"] = `Bearer ${getToken()}`;
  },
});

http.interceptors.request.use(
  (config) => {
    if (getToken()) {
      config.headers["Authorization"] = `Bearer ${getToken()}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

http.interceptors.response.use(
  (response: any) => {
    if (response.headers["authorization"]) {
      console.log("Token refresh");
      localStorage.setItem("token", response.headers["authorization"]);
      getToken();
    }
    return response;
  },
  (error) => {
    if (error.response?.status === 401 && error.response?.data.logout) {
      window.location.href = "/";
    }

    return Promise.reject(error);
  }
);

export default http;
