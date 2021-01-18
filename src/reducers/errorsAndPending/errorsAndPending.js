import { PENDING, FAILURE } from "../../actions/errorsAndPending/types";

const initialState = {
  pending: false,
  error: null,
};

const errorAndPendingReducer = (state = initialState, action) => {
  switch (action.type) {
    case PENDING:
      return { pending: true };
    case FAILURE:
      return {
        error: action.error,
        pending: false,
      };
    default:
      return state;
  }
};

export default errorAndPendingReducer;
