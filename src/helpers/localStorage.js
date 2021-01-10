import jwtDecode from "jwt-decode";

export const saveToken = (token) => {
  const { localStorage } = window;
  localStorage.setItem("jwt", token);
};

export const saveEmail = (email) => {
  const { localStorage } = window;
  localStorage.setItem("email", email);
};

export const removeToken = () => {
  const { localStorage } = window;
  localStorage.removeItem("jwt");
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

/*
 * This should not be the final solution, adding cart items to localStorage looks insecure
 */
export const addcart = (value) => {
  const { localStorage } = window;
  const data = localStorage.getItem("cart") || "{}";

  const updatedCart = {
    ...JSON.parse(data),
    ...value,
  };
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};

export const getCart = () => JSON.parse(localStorage.getItem("cart") || "{}");

export const getEmail = () => localStorage.getItem("email") || "{}";
