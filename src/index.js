import React from "react";
import { render } from "react-dom";

import App from "./Giphy2/App";
import "./Giphy2/App.css";
import rootReducer from "./Giphy2/reducers";

// redux-thunk 使用のため ①applyMiddleware をインポート
import { createStore, applyMiddleware } from "redux";

// redux-thunk 使用のため ②
import thunk from "redux-thunk";

import { Provider } from "react-redux";

// redux-thunk 使用のため ③　　middleWare 配列obj
const middleWares = [thunk];

// redux-thunk 使用のため ④ createstore に thunk を（middleWares）を適用
//const store = createStore(rootReducer);
const store = createStore(rootReducer, applyMiddleware(...middleWares));

//for test
//console.log(store.getState());

// Providerで囲む
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

/* #66 仮実行用
import getUrls from "./Giphy2/actions/getUrls";
store.dispatch(getUrls("cat"));
*/

/* ＃６５　仮実行用
import giphyAPI from "./Giphy2/APIs/giphyAPI";

giphyAPI("cat").then(res => {
  console.log(res.data);
});
*/
