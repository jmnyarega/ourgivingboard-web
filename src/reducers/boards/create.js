import { CREATE_BOARD_SUCCESS } from "../../actions/board/types";

const initialState = {
  board: null,
  pending: true,
};

const createBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOARD_SUCCESS:
      return {
        board: action.payload,
        pending: false,
      };

    default:
      return state;
  }
};

export default createBoardReducer;
