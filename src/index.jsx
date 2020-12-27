import React from "react";
import ReactDOM from "react-dom";
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import App from "./App/index";
import store from "./store";
const myEnv = dotenv.config({ path: "../.env" });
dotenvExpand(myEnv);

console.log(process.env);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
