// import { http } from "../../helpers/axios";
// import { URL } from "../../helpers/constants";
import { server as fakeServer } from "../../coverage/fakeServer";
import {
  CREATE_BOARD_PENDING,
  CREATE_BOARD_SUCCESS,
  CREATE_BOARD_FAILURE,
} from "./types";

export const createBoardPending = () => ({
  type: CREATE_BOARD_PENDING,
});

export const createBoardSuccess = (payload) => ({
  type: CREATE_BOARD_SUCCESS,
  payload,
});

export const createBoardFailure = (error) => ({
  type: CREATE_BOARD_FAILURE,
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
          return dispatch(
            createBoardFailure(error.response?.data.errrs)
          );
        } else {
          return dispatch(createBoardFailure("something went wrong"));
        }
      });
  };
};
