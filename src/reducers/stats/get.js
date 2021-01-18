import { STAT_SUCCESS } from "../../actions/stats/types";

const initialState = {
  stat: null,
  pending: false,
};

const statReducer = (state = initialState, action) => {
  switch (action.type) {
    case STAT_SUCCESS:
      return {
        stat: action.payload,
        pending: false,
      };

    default:
      return state;
  }
};

export default statReducer;
