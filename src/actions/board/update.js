import { http } from "../../helpers/axios";
import { URL } from "../../helpers/constants";
// import { server as fakeServer } from "../../coverage/fakeServer";
import {
  UPDATE_BOARD_PENDING,
  UPDATE_BOARD_SUCCESS,
  UPDATE_BOARD_FAILURE,
} from "./types";

export const updateBoardPending = () => ({
  type: UPDATE_BOARD_PENDING,
});

export const updateBoardSuccess = (payload) => ({
  type: UPDATE_BOARD_SUCCESS,
  payload,
});

export const updateBoardFailure = (error) => ({
  type: UPDATE_BOARD_FAILURE,
  error,
});

export const updateBoard = (data) => {
  return (dispatch) => {
    dispatch(updateBoardPending());
    http()
      // fakeServer(user)
      .get(`${URL}/adim/board`, data)
      .then((response) => dispatch(updateBoardSuccess(response.data)))
      .catch((error) => {
        if (error.response) {
          return dispatch(
            updateBoardFailure(error.response?.data.errrs)
          );
        } else {
          return dispatch(updateBoardFailure("something went wrong"));
        }
      });
  };
};
