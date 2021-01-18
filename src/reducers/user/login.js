import { LOGIN_SUCCESS } from "../../actions/user/types";

const initialState = {
  user: null,
  pending: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        user: action.payload,
        pending: false,
      };

    default:
      return state;
  }
};

export default loginReducer;
