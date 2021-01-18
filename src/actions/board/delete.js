import { http } from "../../helpers/axios";
import { URL } from "../../helpers/constants";
// import { server as fakeServer } from "../../coverage/fakeServer";
import { DELETE_BOARD_SUCCESS } from "./types";
import { FAILURE, PENDING } from "../errorsAndPending/types";

export const deleteBoardPending = () => ({
  type: PENDING,
});

export const deleteBoardSuccess = (payload) => ({
  type: DELETE_BOARD_SUCCESS,
  payload,
});

export const deleteBoardFailure = (error) => ({
  type: FAILURE,
  error,
});

export const deleteBoard = (data) => {
  return (dispatch) => {
    dispatch(deleteBoardPending());
    http()
      // fakeServer(user)
      .delete(`${URL}/adim/board`, data)
      .then((response) => dispatch(deleteBoardSuccess(response.data)))
      .catch((error) => {
        if (error.response) {
          return dispatch(deleteBoardFailure(error.response?.data.errrs));
        } else {
          return dispatch(deleteBoardFailure("something went wrong"));
        }
      });
  };
};
