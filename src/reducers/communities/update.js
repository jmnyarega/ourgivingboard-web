import {
  UPDATE_COMMUNITY_PENDING,
  UPDATE_COMMUNITY_SUCCESS,
  UPDATE_COMMUNITY_FAILURE,
} from "../../actions/communities/types";

const initialState = {
  community: null,
  pending: false,
  error: null,
};

const updateCommunityReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMUNITY_PENDING:
      return { pending: true };
    case UPDATE_COMMUNITY_SUCCESS:
      return {
        community: action.payload,
        pending: false,
      };
    case UPDATE_COMMUNITY_FAILURE:
      return {
        error: action.error,
        pending: false,
      };
    default:
      return state;
  }
};

export default updateCommunityReducer;
