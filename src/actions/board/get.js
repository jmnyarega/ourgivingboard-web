import { http } from "../../helpers/axios";
import { URL } from "../../helpers/constants";
import { GET_BOARD_SUCCESS } from "./types";
import { FAILURE, PENDING } from "../errorsAndPending/types";

export const getBoardPending = () => ({
  type: PENDING,
});

export const getBoardSuccess = (payload) => ({
  type: GET_BOARD_SUCCESS,
  payload,
});

export const getBoardFailure = (error) => ({
  type: FAILURE,
  error,
});

export const getBoards = () => {
  return (dispatch) => {
    dispatch(getBoardPending());
    http()
      .get(`${URL}/communities/1/fundboards`)
      .then((response) => dispatch(getBoardSuccess(response?.data?.fundboards)))
      .catch((error) => {
        if (error.response) {
          return dispatch(getBoardFailure(error.response?.data.errors));
        } else {
          return dispatch(getBoardFailure("something went wrong"));
        }
      });
  };
};
