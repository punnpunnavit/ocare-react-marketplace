import Repository from "../repository";

const resource = "/customer";
export default {
  get() {
    return Repository.get(`${resource}`);
  },
  getByIdNo(idNo) {
    return Repository.get(`${resource}/${idNo}`);
  },
  createPost(payload) {
    return Repository.post(`${resource}`, payload);
  }
};
