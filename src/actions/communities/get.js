// import { http } from "../../helpers/axios";
// import { URL } from "../../helpers/constants";
import { server as fakeServer } from "../../coverage/fakeServer";
import {
  GET_COMMUNITIES_PENDING,
  GET_COMMUNITIES_SUCCESS,
  GET_COMMUNITIES_FAILURE,
} from "./types";

export const getCommunityPending = () => ({
  type: GET_COMMUNITIES_PENDING,
});

export const getCommunitySuccess = (payload) => ({
  type: GET_COMMUNITIES_SUCCESS,
  payload,
});

export const getCommunityFailure = (error) => ({
  type: GET_COMMUNITIES_FAILURE,
  error,
});

export const getCommunities = () => {
  return (dispatch) => {
    dispatch(getCommunityPending());
    // http()
      fakeServer({})
      // .get(`${URL}/adim/community`, data)
      .then(() => dispatch(getCommunitySuccess({})))
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
