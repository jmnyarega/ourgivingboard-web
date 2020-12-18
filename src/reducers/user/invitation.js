import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_FAILURE } from "../../actions/constants/types";

const initialState = {
  user: 0,
  pending: true,
  error: null
};

const invitationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING':
      return { pending: true }
    case 'LOGIN_SUCCESS':
      return {
        user: action.payload,
        pending: false
      }
    case 'LOGIN_ERROR':
      return {
        error: action.payload,
        pending: false
      }
    default:
      return state
  }
}

export default invitationReducer;
