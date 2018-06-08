import React from "react";

//クリック時にファンクション実行（onClick={}内）
//DOM 画面表示の部分
//propsに number, pllus, minus　が入ってくる
const App = ({ number, title, day, plus, minus, asyncMinus, getJson }) => {
  return (
    <div>
      <h2>
        App {title} {day} Number = {number}
      </h2>
      <button
        onClick={() => {
          plus(1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          plus(10);
        }}
      >
        +10
      </button>
      <button
        onClick={() => {
          minus(1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          minus(10);
        }}
      >
        -10
      </button>
      <button
        onClick={() => {
          asyncMinus(10);
        }}
      >
        -10 async
      </button>
      <button
        onClick={() => {
          getJson(title);
        }}
      >
        getJson
      </button>
    </div>
  );
};

export default App;

//以下はロジック部分（どういったstateを渡すのか、どうdispatchするのかの判断）
// ../containers/App.js に移動
