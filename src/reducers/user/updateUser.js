import { UPDATE_USER_SUCCESS } from "../../actions/user/types";

const initialState = {
  user: null,
  pending: false,
};

const updateUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_SUCCESS:
      return {
        user: action.payload,
        pending: false,
      };

    default:
      return state;
  }
};

export default updateUserReducer;
