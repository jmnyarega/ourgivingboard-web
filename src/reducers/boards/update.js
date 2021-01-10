import {
  UPDATE_BOARD_PENDING,
  UPDATE_BOARD_SUCCESS,
  UPDATE_BOARD_FAILURE,
} from "../../actions/board/types";

const initialState = {
  board: null,
  pending: false,
  error: null,
};

const updateBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BOARD_PENDING:
      return { pending: true };
    case UPDATE_BOARD_SUCCESS:
      return {
        board: action.payload,
        pending: false,
      };
    case UPDATE_BOARD_FAILURE:
      return {
        error: action.error,
        pending: false,
      };
    default:
      return state;
  }
};

export default updateBoardReducer;
