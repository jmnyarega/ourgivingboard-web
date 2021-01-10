import {
  GET_BOARD_PENDING,
  GET_BOARD_SUCCESS,
  GET_BOARD_FAILURE,
} from "../../actions/board/types";

const initialState = {
  boards: null,
  pending: false,
  error: null,
};

const getBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOARD_PENDING:
      return { pending: true };
    case GET_BOARD_SUCCESS:
      return {
        boards: action.payload,
        pending: false,
      };
    case GET_BOARD_FAILURE:
      return {
        error: action.error,
        pending: false,
      };
    default:
      return state;
  }
};

export default getBoardReducer;
