import { decode } from "../../helpers/axios";
import {
  CURRENT_USER_PENDING,
  CURRENT_USER_SUCCESS,
  CURRENT_USER_FAILURE,
} from "./types";

export const currentUserPending = () => ({
  type: CURRENT_USER_PENDING,
});

export const currentUserSuccess = (payload) => ({
  type: CURRENT_USER_SUCCESS,
  payload,
});

export const currentUserFailure = (error) => ({
  type: CURRENT_USER_FAILURE,
  error,
});

export const getUserByToken = () => {
  currentUserPending();
  try {
    const user = decode();
    currentUserSuccess(user);
  } catch (error) {
    currentUserFailure();
  }
};
