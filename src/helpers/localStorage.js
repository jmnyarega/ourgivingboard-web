import jwtDecode from "jwt-decode";

export const saveToken = (token) => {
  const { localStorage } = window;
  localStorage.setItem("jwt", token);
};

export const saveEmail = (email) => {
  const { localStorage } = window;
  localStorage.setItem("email", email);
};

export const cleanLocalStorage = () => {
  const { localStorage } = window;
  localStorage.removeItem("jwt");
  localStorage.removeItem("email");
};


export const decodeUser = () => {
  const token = localStorage.getItem("jwt");
  const user = token ? jwtDecode(token) : {};
  return user;
};

export const getToken = () => {
  const { localStorage } = window;
  const token = localStorage.getItem("jwt");
  return token;
};

export const getEmail = () => localStorage.getItem("email");
