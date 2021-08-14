import Repository from "../repository";

const resource = "/posts";
export default {
  get() {
    return Repository.get(`${resource}`);
  },
  getByPostId(idNo) {
    return Repository.get(`${resource}/${idNo}`);
  },
  createPost(payload) {
    return Repository.post(`${resource}`, payload);
  }
};
