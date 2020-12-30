import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk" // to help with the async actions
import reducer from "./reducers";

let store;

if (process.env.NODE_ENV !== "development") {
  store = createStore(reducer, applyMiddleware(thunk));
} else {
  store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
}

console.log(store.getState());

export default store;
