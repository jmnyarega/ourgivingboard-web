import { http } from "../../helpers/axios";
import { URL } from "../../helpers/constants";
import { COMMUNITY_STATS_PENDING, COMMUNITY_STATS_SUCCESS, COMMUNITY_STATS_FAILURE } from "./types";

export const communityStatsPending = () => ({
  type: COMMUNITY_STATS_PENDING,
});

export const communityStatsSuccess = (payload) => ({
  type: COMMUNITY_STATS_SUCCESS,
  payload,
});

export const communityStatsFailure = (error) => ({
  type: COMMUNITY_STATS_FAILURE,
  error,
});

export const communityStats = () => {
  return (dispatch) => {
    dispatch(communityStatsPending());
    http()
      .get(`${URL}/fundboards/stats`)
      .then((response) =>
        dispatch(communityStatsSuccess(response?.data.fundboards))
      )
      .catch((error) => {
        if (error.response) {
          return dispatch(
            communityStatsFailure(error.response?.data.fundboads)
          );
        } else {
          return dispatch(communityStatsFailure("something went wrong"));
        }
      });
  };
};
