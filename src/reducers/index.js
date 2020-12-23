import { combineReducers } from "redux";

import invitationReducer from "./user/invitation";
import loginReducer from "./user/login";

export default combineReducers({
  invite: invitationReducer,
  login: loginReducer,
}); 
