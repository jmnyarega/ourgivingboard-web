import { WAIT_LIST_SUCCESS } from "../../actions/waitingList/types";

const initialState = {
  waitingList: null,
  pending: false,
};

const waitingListReducer = (state = initialState, action) => {
  switch (action.type) {
    case WAIT_LIST_SUCCESS:
      return {
        waitingList: action.payload,
        pending: false,
      };
    default:
      return state;
  }
};

export default waitingListReducer;
