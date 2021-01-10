import { http } from "../../helpers/axios";
import { URL } from "../../helpers/constants";
// import { server as fakeServer } from "../../coverage/fakeServer";
import {
  UPDATE_COMMUNITY_PENDING,
  UPDATE_COMMUNITY_SUCCESS,
  UPDATE_COMMUNITY_FAILURE,
} from "./types";

export const updateCommunityPending = () => ({
  type: UPDATE_COMMUNITY_PENDING,
});

export const updateCommunitySuccess = (payload) => ({
  type: UPDATE_COMMUNITY_SUCCESS,
  payload,
});

export const updateCommunityFailure = (error) => ({
  type: UPDATE_COMMUNITY_FAILURE,
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
          return dispatch(
            updateCommunityFailure(error.response?.data.errrs)
          );
        } else {
          return dispatch(updateCommunityFailure("something went wrong"));
        }
      });
  };
};
