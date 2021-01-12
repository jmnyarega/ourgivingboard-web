import {
  COMMUNITY_STATS_PENDING,
  COMMUNITY_STATS_SUCCESS,
  COMMUNITY_STATS_FAILURE,
} from "../../actions/communityStats/types";

const initialState = {
  communityStats: null,
  pending: false,
  error: null,
};

const communityStatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMUNITY_STATS_PENDING:
      return { pending: true };
    case COMMUNITY_STATS_SUCCESS:
      return {
        communityStats: action.payload,
        pending: false,
      };
    case COMMUNITY_STATS_FAILURE:
      return {
        error: action.payload,
        pending: false,
      };
    default:
      return state;
  }
};

export default communityStatsReducer;
