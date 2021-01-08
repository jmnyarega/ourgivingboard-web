import {
  CREATE_COMMUNITY_PENDING,
  CREATE_COMMUNITY_SUCCESS,
  CREATE_COMMUNITY_FAILURE,
} from "../../actions/communities/types";

const initialState = {
  community: null,
  pending: false,
  error: null,
};

const createCommunityReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COMMUNITY_PENDING:
      return { pending: true };
    case CREATE_COMMUNITY_SUCCESS:
      return {
        community: action.payload,
        pending: false,
      };
    case CREATE_COMMUNITY_FAILURE:
      return {
        error: action.error,
        pending: false,
      };
    default:
      return state;
  }
};

export default createCommunityReducer;
