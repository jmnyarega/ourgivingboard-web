// import { http } from "../../helpers/axios";
// import { URL } from "../../helpers/constants";
import { server as fakeServer } from "../../coverage/fakeServer";
import { CREATE_BOARD_SUCCESS } from "./types";
import { FAILURE, PENDING } from "../errorsAndPending/types";

export const createBoardPending = () => ({
  type: PENDING,
});

export const createBoardSuccess = (payload) => ({
  type: CREATE_BOARD_SUCCESS,
  payload,
});

export const createBoardFailure = (error) => ({
  type: FAILURE,
  error,
});

export const createBoard = (data) => {
  return (dispatch) => {
    dispatch(createBoardPending());
    // http()
    fakeServer(data)
      // .put(`${URL}/adim/board`, data)
      .then(() => dispatch(createBoardSuccess(data)))
      .catch((error) => {
        if (error.response) {
          return dispatch(createBoardFailure(error.response?.data.errrs));
        } else {
          return dispatch(createBoardFailure("something went wrong"));
        }
      });
  };
};
