//API Config
import axiosInstance from "../AxiosInstance.js";
//react hooks


const MainFeedAPI = {
  fetchMainFeed: async (category, index, lastestDocTime,createNewToken, isCancel) => {
    
    return axiosInstance
      .get("/main", {
        categor: category,
        index: index,
        lastestDocTime: lastestDocTime,
        cancelToken: createNewToken()
      })
      .catch((error) => {
        console.log("Error has occured");
        console.error(error);
        if (isCancel(error)) return;
        Promise.reject(error);
      });
  },
};

export default MainFeedAPI;

// axios({
//     method: 'GET',
//     url: 'http://openlibrary.org/search.json',
//     params: { q: query, page: pageNumber },
//     cancelToken: new axios.CancelToken(c => cancel = c)
//   })
