import {
  CURRENT_USER_PENDING,
  CURRENT_USER_SUCCESS,
  CURRENT_USER_FAILURE,
} from "../../actions/user/types";

const initialState = {
  user: null,
  pending: false,
  error: null,
};

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_USER_PENDING:
      return { pending: true };
    case CURRENT_USER_SUCCESS:
      return {
        user: action.payload,
        pending: false,
      };
    case CURRENT_USER_FAILURE:
      return {
        error: action.payload,
        pending: false,
      };
    default:
      return state;
  }
};

export default currentUserReducer;
