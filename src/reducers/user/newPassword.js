import {
  NEW_PASSWORD_PENDING,
  NEW_PASSWORD_SUCCESS,
  NEW_PASSWORD_FAILURE,
} from "../../actions/user/types";

const initialState = {
  user: null,
  pending: false,
  error: null,
};

const newpasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_PASSWORD_PENDING:
      return { pending: true };
    case NEW_PASSWORD_SUCCESS:
      return {
        user: action.payload,
        pending: false,
      };
    case NEW_PASSWORD_FAILURE:
      return {
        error: action.payload,
        pending: false,
      };
    default:
      return state;
  }
};

export default newpasswordReducer;
