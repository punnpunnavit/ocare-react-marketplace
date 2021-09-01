import axios from "axios";
import { API_URL } from "../Config/config";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {},
});

const requestHandler = (request) => {
  request.headers.Authorization = window.localStorage.getItem("accessToken");
  console.log(request);
  return request;
};

const responseHandler = (response) => {
  if (response.status === 401) {
  }

  return response;
};

const errorHandler = (error) => {
  return Promise.reject(error);
};

axiosInstance.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);
axiosInstance.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default axiosInstance;
