import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { composeWithDevTools } from "redux-devtools-extension";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import rootReducer from "./modules";
import { Provider } from "react-redux";

const store = createStore(rootReducer, composeWithDevTools());
// store를 props로 전달하기
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
