import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  saveToken,
  saveUid,
  saveTokenType,
  saveExpiry,
  saveClient,
} from "../helpers/localStorage";
import { getCurrentUser } from "../actions/user/currentUser";

export const useVerifyLogin = (
  user,
  pending,
  error,
  history,
  successMessage,
  path
) => {
  const [outputMesssage, setMessage] = useState();
  useEffect(() => {
    if (user && pending === false && !error) {
      saveToken(user?.token);
      saveTokenType(user?.token_type);
      saveClient(user?.client);
      saveExpiry(user?.expiry);
      saveUid(user?.uid);
      if (path) {
        location.href = "/#/payment";
        location.reload();
      } else history.push("/home");
    } else if (error && pending === false) {
      setMessage(error);
    }
  }, [user, pending, error]);
  return outputMesssage;
};

export const useForgotPasswordEmail = (user, pending, error) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (user) {
      setLoaded(true);
    } else if (error) {
      setLoaded(false);
    }
  }, [user, pending, error]);
  return loaded;
};

export const useCurrentUser = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getCurrentUser()), []);
};
