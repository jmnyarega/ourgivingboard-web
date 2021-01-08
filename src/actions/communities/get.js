import { http } from "../../helpers/axios";
import { URL } from "../../helpers/constants";
// import { server as fakeServer } from "../../coverage/fakeServer";
import {
  GET_COMMUNITY_PENDING,
  GET_COMMUNITY_SUCCESS,
  GET_COMMUNITY_FAILURE,
} from "./types";

export const getCommunityPending = () => ({
  type: GET_COMMUNITY_PENDING,
});

export const getCommunitySuccess = (payload) => ({
  type: GET_COMMUNITY_SUCCESS,
  payload,
});

export const getCommunityFailure = (error) => ({
  type: GET_COMMUNITY_FAILURE,
  error,
});

export const getCommunities = (data) => {
  return (dispatch) => {
    dispatch(getCommunityPending());
    http()
      // fakeServer(user)
      .get(`${URL}/adim/community`, data)
      .then((response) => dispatch(getCommunitySuccess(response.data)))
      .catch((error) => {
        if (error.response) {
          return dispatch(
            getCommunityFailure(error.response?.data.errrs)
          );
        } else {
          return dispatch(getCommunityFailure("something went wrong"));
        }
      });
  };
};
