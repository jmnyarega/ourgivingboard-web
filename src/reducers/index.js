import { combineReducers } from "redux";

//errors and pending reducer
import errorAndPendingReducer from "./errorsAndPending/errorsAndPending";
// user
import invitationReducer from "./user/invitation";
import loginReducer from "./user/login";
import updateUserReducer from "./user/updateUser";
import currentUserReducer from "./user/currentUser";
import forgotPasswordReducer from "./user/forgotPassword";
import newPasswordReducer from "./user/newPassword";

// payment
import createPaymentReducer from "./payment/createPayment";
import confirmPaymentReducer from "./payment/confirmPayment";
import beginPaymentReducer from "./payment/beginPayment";
import completePaymentReducer from "./payment/completePayment";

// boards
import getBoardReducer from "./boards/get";
import deleteBoardReducer from "./boards/delete";
import updateBoardReducer from "./boards/update";
import createBoardReducer from "./boards/create";

// communities
import getCommunitiesReducer from "./communities/get";
import deleteCommunityReducer from "./communities/delete";
import updateCommunityReducer from "./communities/update";
import createCommunityReducer from "./communities/create";

// waiting list
import waitingListReducer from "./waitingList/get";

// active boards
import activeBoardsReducer from "./activeBoards/get";

// community stats
import communityStatsReducer from "./communityStats/get";
import statReducer from "./stats/get";
import billingDetailsReducer from "./billingDetails/get";

export default combineReducers({
  invite: invitationReducer,
  login: loginReducer,
  currentUser: currentUserReducer,
  updateUser: updateUserReducer,
  createPayment: createPaymentReducer,
  confirmPayment: confirmPaymentReducer,
  completePayment: completePaymentReducer,
  beginPayment: beginPaymentReducer,
  forgotPassword: forgotPasswordReducer,
  newPassword: newPasswordReducer,
  boards: getBoardReducer,
  deleteBoard: deleteBoardReducer,
  updateBoard: updateBoardReducer,
  createBoard: createBoardReducer,
  communities: getCommunitiesReducer,
  deleteCommunity: deleteCommunityReducer,
  updateCommunity: updateCommunityReducer,
  createComminuty: createCommunityReducer,
  waitingList: waitingListReducer,
  activeBoards: activeBoardsReducer,
  communityStats: communityStatsReducer,
  stat: statReducer,
  billing: billingDetailsReducer,
  errorAndPending: errorAndPendingReducer,
});
