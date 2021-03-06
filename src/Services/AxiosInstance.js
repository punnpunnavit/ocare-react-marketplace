import axios from "axios";
import { API_URL } from "../Config/config";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 100000,
  headers: {},
});

const requestHandler = (request) => {
  request.headers.Authorization = `Bearer ${window.localStorage.getItem("accessToken")}`;
  // request.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.YzQ5YzgyZTgwYTA0ZjJhYWI5OWNhMmJjMjhhYzRlZjU1MDFjMzY4MGI0YzdmOWMxMDE4OTE2ZWM4ZjE0NmU5Yg.pDuwuMKI7tqt6ftVkrzZZYZIuoB7lwDyIQykYz5UTYQ';
  console.log("This is request");
  console.log(request);
  console.log(JSON.stringify(request));
  console.log("This is end of request");
  return request;
};

const responseHandler = (response) => {
  if (response.status === 401) {
  }
  console.log(response);
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
