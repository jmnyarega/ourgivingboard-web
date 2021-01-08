import {
  DELETE_COMMUNITY_PENDING,
  DELETE_COMMUNITY_SUCCESS,
  DELETE_COMMUNITY_FAILURE,
} from "../../actions/communities/types";

const initialState = {
  community: null,
  pending: false,
  error: null,
};

const deleteCommunityReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_COMMUNITY_PENDING:
      return { pending: true };
    case DELETE_COMMUNITY_SUCCESS:
      return {
        community: action.payload,
        pending: false,
      };
    case DELETE_COMMUNITY_FAILURE:
      return {
        error: action.error,
        pending: false,
      };
    default:
      return state;
  }
};

export default deleteCommunityReducer;
