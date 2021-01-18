import { http } from "../../helpers/axios";
import { URL } from "../../helpers/constants";
import { COMMUNITY_STATS_SUCCESS } from "./types";
import { FAILURE, PENDING } from "../errorsAndPending/types";

export const communityStatsPending = () => ({
  type: PENDING,
});

export const communityStatsSuccess = (payload) => ({
  type: COMMUNITY_STATS_SUCCESS,
  payload,
});

export const communityStatsFailure = (error) => ({
  type: FAILURE,
  error,
});

export const communityStats = () => {
  return (dispatch) => {
    dispatch(communityStatsPending());
    http()
      .get(`${URL}/fundboards/stats`)
      .then((response) =>
        dispatch(
          communityStatsSuccess({
            data: response?.data.fundboards,
          })
        )
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
