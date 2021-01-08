import {
  CREATE_BOARD_PENDING,
  CREATE_BOARD_SUCCESS,
  CREATE_BOARD_FAILURE,
} from "../../actions/board/types";

const initialState = {
  board: null,
  pending: false,
  error: null,
};

const createBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOARD_PENDING:
      return { pending: true };
    case CREATE_BOARD_SUCCESS:
      return {
        board: action.payload,
        pending: false,
      };
    case CREATE_BOARD_FAILURE:
      return {
        error: action.error,
        pending: false,
      };
    default:
      return state;
  }
};

export default createBoardReducer;
