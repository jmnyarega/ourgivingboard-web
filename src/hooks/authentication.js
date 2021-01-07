import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveEmail, saveToken } from "../helpers/axios";
import { getUserByToken } from "../actions/user/currentUser";

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
      saveEmail(user?.uid);
      saveToken(user?.auth_token);
      setMessage(successMessage);
      if (path) {
        history.push(path);
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
  useEffect(() => dispatch(getUserByToken()), []);
};
