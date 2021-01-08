import {
  DELETE_BOARD_PENDING,
  DELETE_BOARD_SUCCESS,
  DELETE_BOARD_FAILURE,
} from "../../actions/board/types";

const initialState = {
  board: null,
  pending: false,
  error: null,
};

const deleteBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_BOARD_PENDING:
      return { pending: true };
    case DELETE_BOARD_SUCCESS:
      return {
        board: action.payload,
        pending: false,
      };
    case DELETE_BOARD_FAILURE:
      return {
        error: action.error,
        pending: false,
      };
    default:
      return state;
  }
};

export default deleteBoardReducer;
