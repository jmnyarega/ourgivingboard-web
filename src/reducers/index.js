import { combineReducers } from "redux";

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
import waitingListReducer from "./waitingList/get"

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
});
