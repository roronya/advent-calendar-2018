import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import SearchCondition from "./forms/SearchCondition";

const searchConditionReducer = (state = new SearchCondition(), action) => {
  switch (action.type) {
    case "SEARCH_SALON":
      return action.payload;
    default:
      return state;
  }
};
const store = createStore(
  combineReducers({
    searchCondition: searchConditionReducer
  })
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
