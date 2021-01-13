import {
  STAT_PENDING,
  STAT_SUCCESS,
  STAT_FAILURE,
} from "../../actions/stats/types";

const initialState = {
  stat: null,
  pending: false,
  error: null,
};

const statReducer = (state = initialState, action) => {
  switch (action.type) {
    case STAT_PENDING:
      return { pending: true };
    case STAT_SUCCESS:
      return {
        stat: action.payload,
        pending: false,
      };
    case STAT_FAILURE:
      return {
        error: action.payload,
        pending: false,
      };
    default:
      return state;
  }
};

export default statReducer;
