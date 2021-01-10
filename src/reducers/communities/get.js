import {
  GET_COMMUNITIES_PENDING,
  GET_COMMUNITIES_SUCCESS,
  GET_COMMUNITIES_FAILURE,
} from "../../actions/communities/types";

const initialState = {
  communities: null,
  pending: false,
  error: null,
};

const getCommunityReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMUNITIES_PENDING:
      return { pending: true };
    case GET_COMMUNITIES_SUCCESS:
      return {
        communities: action.payload,
        pending: false,
      };
    case GET_COMMUNITIES_FAILURE:
      return {
        error: action.error,
        pending: false,
      };
    default:
      return state;
  }
};

export default getCommunityReducer;
