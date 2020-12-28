import { useEffect, useState } from "react";
import { saveToken } from "../helpers/axios";

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
