import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://example/api",
  timeout: 10000,
  headers: {},
});

const requestHandler = (request) => {

  request.headers.Authorization = window.localStorage.getItem("accessToken");

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
