// import { http } from "../../helpers/axios";
// import { URL } from "../../helpers/constants";
import { server as fakeServer } from "../../coverage/fakeServer";
import {
  CREATE_COMMUNITY_PENDING,
  CREATE_COMMUNITY_SUCCESS,
  CREATE_COMMUNITY_FAILURE,
} from "./types";

export const createCommunityPending = () => ({
  type: CREATE_COMMUNITY_PENDING,
});

export const createCommunitySuccess = (payload) => ({
  type: CREATE_COMMUNITY_SUCCESS,
  payload,
});

export const createCommunityFailure = (error) => ({
  type: CREATE_COMMUNITY_FAILURE,
  error,
});

export const createComminuty = (data) => {
  return (dispatch) => {
    dispatch(createCommunityPending());
    // http()
      fakeServer(data)
      // .put(`${URL}/adim/board`, data)
      .then(() => dispatch(createCommunitySuccess(data)))
      .catch((error) => {
        console.log(error)
        if (error.response) {
          return dispatch(
            createCommunityFailure(error.response?.data.errrs)
          );
        } else {
          return dispatch(createCommunityFailure("something went wrong"));
        }
      });
  };
};
