import { http } from "../../helpers/axios";
import { URL } from "../../helpers/constants";
import {
  GET_BOARD_PENDING,
  GET_BOARD_SUCCESS,
  GET_BOARD_FAILURE,
} from "./types";

export const getBoardPending = () => ({
  type: GET_BOARD_PENDING,
});

export const getBoardSuccess = (payload) => ({
  type: GET_BOARD_SUCCESS,
  payload,
});

export const getBoardFailure = (error) => ({
  type: GET_BOARD_FAILURE,
  error,
});

export const getBoards = () => {
  return (dispatch) => {
    dispatch(getBoardPending());
    http()
      .get(`${URL}/communities/0/fundboards`)
      .then((response) => dispatch(getBoardSuccess(response?.data)))
      .catch((error) => {
        if (error.response) {
          return dispatch(getBoardFailure(error.response?.data.errrs));
        } else {
          return dispatch(getBoardFailure("something went wrong"));
        }
      });
  };
};
