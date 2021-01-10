import axios from "axios";
import { getToken } from "./localStorage";

export const http = () => {
  const token = getToken();
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  return axios;
};

