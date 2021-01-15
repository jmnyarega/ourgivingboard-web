
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
  localStorage.removeItem("cart");
  localStorage.removeItem("intent");
  localStorage.removeItem("paymentId");
  localStorage.removeItem("preload");
  localStorage.removeItem("foundation");
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

export const saveIntent = (secret) => {
  const { localStorage } = window;
  localStorage.setItem("intent", secret);
}

export const savePaymentId = (paymentId) => {
  const { localStorage } = window;
  localStorage.setItem("paymentId", paymentId);
}

export const getIntent = () => {
  const { localStorage } = window;
  return localStorage.getItem("intent");
}

export const getPaymentId = () => {
  const { localStorage } = window;
  return localStorage.getItem("paymentId");
}

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

export const savePreload = (amount) => {
  const { localStorage } = window;
  localStorage.setItem("preload", amount);
};

export const getPreload = () => {
  const { localStorage } = window;
  return localStorage.getItem("preload");
};

export const saveFoundation = (amount) => {
  const { localStorage } = window;
  localStorage.setItem("foundation", amount);
};

export const getFundation = () => {
  const { localStorage } = window;
  return localStorage.getItem("foundation");
};

export const clearCart = () => {
  const { localStorage } = window;
  localStorage.removeItem("intent");
  localStorage.removeItem("paymentId");
  localStorage.removeItem("cart");
  localStorage.removeItem("preload");
  localStorage.removeItem("foundation");
};
