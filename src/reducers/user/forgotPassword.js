import {
  FORGOT_PASSWORD_PENDING,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
} from "../../actions/user/types";

const initialState = {
  user: null,
  pending: false,
  error: null,
};

const forgotPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_PENDING:
      return { pending: true };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        user: action.payload,
        pending: false,
      };
    case FORGOT_PASSWORD_FAILURE:
      return {
        error: action.payload,
        pending: false,
      };
    default:
      return state;
  }
};

export default forgotPasswordReducer;
