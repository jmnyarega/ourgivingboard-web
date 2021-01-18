import { http } from "../../helpers/axios";
import { URL } from "../../helpers/constants";
import { ACTIVE_BOARDS_SUCCESS } from "./types";
import { FAILURE, PENDING } from "../errorsAndPending/types";

export const activeBoardsPending = () => ({
  type: PENDING,
});

export const activeBoardsFailure = (error) => ({
  type: FAILURE,
  error,
});

export const activeBoardsSuccess = (payload) => ({
  type: ACTIVE_BOARDS_SUCCESS,
  payload,
});

export const activeBoards = () => {
  return (dispatch) => {
    dispatch(activeBoardsPending());
    http()
      .get(`${URL}/fundboards`)
      .then((response) =>
        dispatch(
          activeBoardsSuccess({
            data: response?.data.fundboards,
          })
        )
      )
      .catch((error) => {
        if (error.response) {
          return dispatch(
            activeBoardsFailure(error.response?.data.active_boards)
          );
        } else {
          return dispatch(activeBoardsFailure("something went wrong"));
        }
      });
  };
};
