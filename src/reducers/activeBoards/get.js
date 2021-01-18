import { ACTIVE_BOARDS_SUCCESS } from "../../actions/activeBoards/types";

const initialState = {
  activeBoards: null,
};

const activeBoardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_BOARDS_SUCCESS:
      return {
        activeBoards: action.payload,
        pending: false,
      };

    default:
      return state;
  }
};

export default activeBoardsReducer;
