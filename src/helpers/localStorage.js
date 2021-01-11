
export const saveToken = (token) => {
  const { localStorage } = window;
  localStorage.setItem("token", token);
};

export const saveUid = (uid) => {
  const { localStorage } = window;
  const token = localStorage.setItem("uid", uid);
  return token;
};

export const saveExpiry = (expiry) => {
  const { localStorage } = window;
  const token = localStorage.setItem("expiry", expiry);
  return token;
};

export const saveClient = (client) => {
  const { localStorage } = window;
  const token = localStorage.setItem("client", client);
  return token;
};

export const saveTokenType = (tokenType) => {
  const { localStorage } = window;
  const token = localStorage.setItem("token_type", tokenType);
  return token;
};

export const cleanLocalStorage = () => {
  const { localStorage } = window;
  localStorage.removeItem("jwt");
  localStorage.removeItem("token");
  localStorage.removeItem("token_type");
  localStorage.removeItem("expiry");
  localStorage.removeItem("client");
  localStorage.removeItem("uid");
};

export const getToken = () => {
  const { localStorage } = window;
  const token = localStorage.getItem("token");
  return token;
};

export const getUid = () => {
  const { localStorage } = window;
  return localStorage.getItem("uid");
};

export const getExpiry = () => {
  const { localStorage } = window;
  return localStorage.getItem("expiry");
};

export const getClient = () => {
  const { localStorage } = window;
  return localStorage.getItem("client");
};

export const getTokenType = () => {
  const { localStorage } = window;
  return localStorage.getItem("token_type");
};
