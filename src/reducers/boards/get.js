import { GET_BOARD_SUCCESS } from "../../actions/board/types";

const initialState = {
  boards: null,
  pending: true,
};

const getBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOARD_SUCCESS:
      return {
        boards: action.payload,
        pending: false,
      };

    default:
      return state;
  }
};

export default getBoardReducer;
