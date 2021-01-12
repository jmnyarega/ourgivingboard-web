import { http } from "../../helpers/axios";
import { URL } from "../../helpers/constants";
import { WAIT_LIST_PENDING, WAIT_LIST_SUCCESS, WAIT_LIST_FAILURE } from "./types";

export const waitingListPending = () => ({
  type: WAIT_LIST_PENDING,
});

export const waitingListSuccess = (payload) => ({
  type: WAIT_LIST_SUCCESS,
  payload,
});

export const waitingListFailure = (error) => ({
  type: WAIT_LIST_FAILURE,
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
            data: response?.data.wait_lists
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
