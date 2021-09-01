//API Config
import axiosInstance from "../AxiosInstance.js";
//react hooks

const MainFeedAPI = {
  fetchMainFeed: async (category, index, lastestDocTime) => {
    return axiosInstance
      .get("/main", {
        categor: category,
        index: index,
        lastestDocTime: lastestDocTime,
      })
    //   .then((response) => {
    //     console.log(response.status + " what is this");
    //     console.log(response.statusText);
    //     console.log(response.data)
    //   })
    //   .catch((error) => {
    //     console.log("Error has occured");
    //     console.error(error);
    //     Promise.reject(error);
    //   });
  },
};

export default MainFeedAPI;

// axios({
//     method: 'GET',
//     url: 'http://openlibrary.org/search.json',
//     params: { q: query, page: pageNumber },
//     cancelToken: new axios.CancelToken(c => cancel = c)
//   })
