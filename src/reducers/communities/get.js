import { GET_COMMUNITIES_SUCCESS } from "../../actions/communities/types";

const initialState = {
  communities: null,
  pending: false,
};

const getCommunityReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMUNITIES_SUCCESS:
      return {
        communities: action.payload,
        pending: false,
      };

    default:
      return state;
  }
};

export default getCommunityReducer;
