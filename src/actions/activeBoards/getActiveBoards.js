import { http } from "../../helpers/axios";
import { URL } from "../../helpers/constants";
import { ACTIVE_BOARDS_PENDING, ACTIVE_BOARDS_SUCCESS, ACTIVE_BOARDS_FAILURE } from "./types";

export const activeBoardsPending = () => ({
  type: ACTIVE_BOARDS_PENDING,
});

export const activeBoardsSuccess = (payload) => ({
  type: ACTIVE_BOARDS_SUCCESS,
  payload,
});

export const activeBoardsFailure = (error) => ({
  type: ACTIVE_BOARDS_FAILURE,
  error,
});

export const activeBoards = () => {
  return (dispatch) => {
    dispatch(activeBoardsPending());
    http()
      .get(`${URL}/communities/1/fundboards`)
      .then((response) =>
        dispatch(
          activeBoardsSuccess({
            data: response?.data.fundboards
          })
        )
      )
      .catch((error) => {
        if (error.response) {
          return dispatch(activeBoardsFailure(error.response?.data.active_boards));
        } else {
          return dispatch(activeBoardsFailure("something went wrong"));
        }
      });
  };
};
