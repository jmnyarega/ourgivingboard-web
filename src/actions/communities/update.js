import { http } from "../../helpers/axios";
import { URL } from "../../helpers/constants";
// import { server as fakeServer } from "../../coverage/fakeServer";
import { UPDATE_COMMUNITY_SUCCESS } from "./types";
import { FAILURE, PENDING } from "../errorsAndPending/types";

export const updateCommunityPending = () => ({
  type: PENDING,
});

export const updateCommunitySuccess = (payload) => ({
  type: UPDATE_COMMUNITY_SUCCESS,
  payload,
});

export const updateCommunityFailure = (error) => ({
  type: FAILURE,
  error,
});

export const updateCommunity = (data) => {
  return (dispatch) => {
    dispatch(updateCommunityPending());
    http()
      // fakeServer(user)
      .get(`${URL}/adim/Community`, data)
      .then((response) => dispatch(updateCommunitySuccess(response.data)))
      .catch((error) => {
        if (error.response) {
          return dispatch(updateCommunityFailure(error.response?.data.errrs));
        } else {
          return dispatch(updateCommunityFailure("something went wrong"));
        }
      });
  };
};
