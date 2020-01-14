import axios from "axios";
import store from "../store";

const api = axios.create({
  baseURL: "/api"
});

api.interceptors.request.use(config => {
  const { token } = store.getState().auth;

  const headers = { ...config.headers };

  if (token) {
    headers.Autorization = `Bearer ${token}`;
  }

  return { ...config, headers };
});

export default api;
