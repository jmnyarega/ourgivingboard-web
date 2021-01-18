import { UPDATE_BOARD_SUCCESS } from "../../actions/board/types";

const initialState = {
  board: null,
  pending: true,
};

const updateBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BOARD_SUCCESS:
      return {
        board: action.payload,
        pending: false,
      };
    default:
      return state;
  }
};

export default updateBoardReducer;
