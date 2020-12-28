import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveToken } from "../helpers/axios";
import { getUserByToken } from "../actions/user/currentUser";

export const useVerifyLogin = (
  user,
  pending,
  error,
  history,
  successMessage
) => {
  const [outputMesssage, setMessage] = useState();
  useEffect(() => {
    if (user && pending === false) {
      saveToken(user?.token);
      setMessage(successMessage)
      history.push("/home");
    } else if (error && pending === false) {
      setMessage(error.message)
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
      setLoaded(false)
    }
  }, [user, pending, error]);
  return loaded;
};

export const useCurrentUser = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getUserByToken()), []);
};
