import axios from "axios";
import {
  getToken,
  getUid,
  getExpiry,
  getClient,
  getTokenType,
} from "./localStorage";

export const http = () => {
  const token = getToken();
  const uid = getUid();
  const token_type = getTokenType();
  const expiry = getExpiry();
  const client = getClient();
  axios.defaults.headers.common["access-token"] = token
  axios.defaults.headers.common.client = client;
  axios.defaults.headers.common.uid = uid;
  axios.defaults.headers.common["token-type"] = token_type;
  axios.defaults.headers.common["expiry"] = expiry;
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  return axios;
};

