import {
  INVITE_PENDING,
  INVITE_SUCCESS,
  INVITE_FAILURE,
} from "../../actions/user/types";

const initialState = {
  user: null,
  pending: false,
  error: null,
};

const invitationReducer = (state = initialState, action) => {
  switch (action.type) {
    case INVITE_PENDING:
      return { pending: true };
    case INVITE_SUCCESS:
      return {
        user: action.payload,
        pending: false,
      };
    case INVITE_FAILURE:
      return {
        error: action.payload,
        pending: false,
      };
    default:
      return state;
  }
};

export default invitationReducer;
