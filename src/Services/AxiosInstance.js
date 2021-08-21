import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://example/api",
  timeout: 10000,
  headers: { },
});

axiosInstance
  .get("/user")
  .then((response) => {
    console.log("response: ", response);
    // do something about response
  })
  .catch((error) => {
    console.error(error);
    Promise.reject(error);
  });


// Step-3: Configure/make use of request & response interceptors from Axios
// Note: You can create one method say configureInterceptors, add below in that,
// export and call it in an init function of the application/page.
axiosInstance.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);
axiosInstance.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default axiosInstance;
