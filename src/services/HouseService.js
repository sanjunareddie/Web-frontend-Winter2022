import http from "../services/http-common.js";
const getAll = () => {
  return http.get("/houses");
};
const get = id => {
  return http.get(`/houses/${id}`);
};
const create = data => {
  return http.post("/houses", data);
};
const update = (id, data) => {
  return http.put(`/houses/${id}`, data);
};
const remove = id => {
  return http.delete(`/houses/${id}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
};