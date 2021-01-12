import {
  WAIT_LIST_PENDING,
  WAIT_LIST_SUCCESS,
  WAIT_LIST_FAILURE,
} from "../../actions/waitingList/types";

const initialState = {
  waitingList: null,
  pending: false,
  error: null,
};

const waitingListReducer = (state = initialState, action) => {
  switch (action.type) {
    case WAIT_LIST_PENDING:
      return { pending: true };
    case WAIT_LIST_SUCCESS:
      return {
        waitingList: action.payload,
        pending: false,
      };
    case WAIT_LIST_FAILURE:
      return {
        error: action.payload,
        pending: false,
      };
    default:
      return state;
  }
};

export default waitingListReducer;
