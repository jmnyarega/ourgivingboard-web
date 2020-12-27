import {
  UPDATE_USER_PENDING,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
} from "../../actions/user/types";

const initialState = {
  user: null,
  pending: false,
  error: null,
};

const updateUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_PENDING:
      return { pending: true };
    case UPDATE_USER_SUCCESS:
      return {
        user: action.payload,
        pending: false,
      };
    case UPDATE_USER_FAILURE:
      return {
        error: action.payload,
        pending: false,
      };
    default:
      return state;
  }
};

export default updateUserReducer;
