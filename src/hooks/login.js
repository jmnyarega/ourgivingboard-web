import { useEffect } from "react";
import { saveToken } from "../helpers/axios";

export const useVerifyLogin = (
  user,
  pending,
  error,
  history,
  successMessage
) => {
  useEffect(() => {
    if (user?.message === successMessage && pending === false) {
      saveToken(user?.token);
      history.push("/home");
    } else if (error && pending === false) {
      return error.message;
    }
  }, [user, pending, error]);
};
