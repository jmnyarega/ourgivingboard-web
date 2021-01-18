import { http } from "../../helpers/axios";
import { URL } from "../../helpers/constants";
import { STAT_SUCCESS } from "./types";
import { FAILURE, PENDING } from "../errorsAndPending/types";

export const statPending = () => ({
  type: PENDING,
});

export const statSuccess = (payload) => ({
  type: STAT_SUCCESS,
  payload,
});

export const statFailure = (error) => ({
  type: FAILURE,
  error,
});

export const getStat = () => {
  return (dispatch) => {
    dispatch(statPending());
    http()
      .get(`${URL}/user-fundboards-stats`)
      .then((response) => dispatch(statSuccess(response.data.stats)))
      .catch((error) => {
        if (error.response) {
          return dispatch(statFailure(error.response?.data));
        } else {
          return dispatch(statFailure("something went wrong"));
        }
      });
  };
};
