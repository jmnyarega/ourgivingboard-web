import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../../actions/user/types";

const initialState = {
  user: null,
  pending: false,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return { pending: true };
    case LOGIN_SUCCESS:
      return {
        user: action.payload,
        pending: false,
      };
    case LOGIN_FAILURE:
      return {
        error: action.error,
        pending: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
