import { FORGOT_PASSWORD_SUCCESS } from "../../actions/user/types";

const initialState = {
  user: null,
  pending: false,
};

const forgotPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_SUCCESS:
      return {
        user: action.payload,
        pending: false,
      };

    default:
      return state;
  }
};

export default forgotPasswordReducer;
