import { DELETE_COMMUNITY_SUCCESS } from "../../actions/communities/types";

const initialState = {
  community: null,
  pending: false,
};

const deleteCommunityReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_COMMUNITY_SUCCESS:
      return {
        community: action.payload,
        pending: false,
      };

    default:
      return state;
  }
};

export default deleteCommunityReducer;
