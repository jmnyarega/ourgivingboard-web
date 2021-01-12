import {
  ACTIVE_BOARDS_PENDING,
  ACTIVE_BOARDS_SUCCESS,
  ACTIVE_BOARDS_FAILURE,
} from "../../actions/activeBoards/types";

const initialState = {
  activeBoards: null,
  pending: false,
  error: null,
};

const activeBoardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_BOARDS_PENDING:
      return { pending: true };
    case ACTIVE_BOARDS_SUCCESS:
      return {
        activeBoards: action.payload,
        pending: false,
      };
    case ACTIVE_BOARDS_FAILURE:
      return {
        error: action.payload,
        pending: false,
      };
    default:
      return state;
  }
};

export default activeBoardsReducer;
