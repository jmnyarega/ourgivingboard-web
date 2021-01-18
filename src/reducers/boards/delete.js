import { DELETE_BOARD_SUCCESS } from "../../actions/board/types";

const initialState = {
  board: null,
  pending: true,
};

const deleteBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_BOARD_SUCCESS:
      return {
        board: action.payload,
        pending: false,
      };

    default:
      return state;
  }
};

export default deleteBoardReducer;
