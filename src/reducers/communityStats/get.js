import { COMMUNITY_STATS_SUCCESS } from "../../actions/communityStats/types";

const initialState = {
  communityStats: null,
  pending: false,
};

const communityStatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMUNITY_STATS_SUCCESS:
      return {
        communityStats: action.payload,
        pending: false,
      };

    default:
      return state;
  }
};

export default communityStatsReducer;
