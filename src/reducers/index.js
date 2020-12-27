import { combineReducers } from "redux";

// user
import invitationReducer from "./user/invitation";
import loginReducer from "./user/login";
import updateUserReducer from "./user/updateUser";
import currentUserReducer from "./user/currentUser";

// payment
import createPaymentReducer from "./payment/createPayment";
import confirmPaymentReducer from "./payment/confirmPayment";
import beginPaymentReducer from "./payment/beginPayment";
import completePaymentReducer from "./payment/completePayment";

export default combineReducers({
  invite: invitationReducer,
  login: loginReducer,
  currentUser: currentUserReducer,
  updateUser: updateUserReducer,
  createPayment: createPaymentReducer,
  confirmPayment: confirmPaymentReducer,
  completePayment: completePaymentReducer,
  beginPayment: beginPaymentReducer,
}); 
