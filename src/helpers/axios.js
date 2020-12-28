import axios from "axios";
import jwtDecode from "jwt-decode";

export const saveToken = (token) => {
  const { localStorage } = window;
  localStorage.setItem("jwt", token);
};

export const removeToken = () => {
  const { localStorage } = window;
  localStorage.removeItem("jwt");
};

export const http = () => {
  const { localStorage } = window;
  const token = localStorage.getItem("jwt");
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  return axios;
};

export const decodeUser = () => {
  const token = localStorage.getItem("jwt");
  const user = token ? jwtDecode(token) : {};
  return user;
};
