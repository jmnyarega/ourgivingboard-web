import { http } from "../../helpers/axios";
import { URL } from "../../helpers/constants";
import { WAIT_LIST_SUCCESS } from "./types";
import { FAILURE, PENDING } from "../errorsAndPending/types";

export const waitingListPending = () => ({
  type: PENDING,
});

export const waitingListSuccess = (payload) => ({
  type: WAIT_LIST_SUCCESS,
  payload,
});

export const waitingListFailure = (error) => ({
  type: FAILURE,
  error,
});

export const waitingList = () => {
  return (dispatch) => {
    dispatch(waitingListPending());
    http()
      .get(`${URL}/fundboards/wait_list`)
      .then((response) =>
        dispatch(
          waitingListSuccess({
            data: response?.data.wait_lists,
          })
        )
      )
      .catch((error) => {
        if (error.response) {
          return dispatch(waitingListFailure(error.response?.data.wait_lists));
        } else {
          return dispatch(waitingListFailure("something went wrong"));
        }
      });
  };
};
