//connectするためにインポート
import { connect } from "react-redux";
import App from "../components/App";

//action creaters をインポート
// index.js はファイル名指定しなくても呼び出し可能
import { plus, minus, asyncMinus, getJson } from "../actions";

//numberという名前でstateをコンポーネントに渡す
const mapStateToProps = state => {
  return {
    number: state.number,
    title: state.title,
    day: state.day
  };
};

//plus, minusという名前でactionをdispatchするメソッドをコンポーネントに渡す
// actions/index.jsに移動
/* original
  return {
    plus: num => {
      dispatch({ type: "PLUS", payload: { num: num } });
    },
    minus: num => {
      dispatch({ type: "MINUS", payload: { num: num } });
    }
  };
};
*/

// action creaters の　plus,minusメソッドをdispatchする
const mapDispatchToProps = dispatch => {
  return {
    plus: num => {
      dispatch(plus(num));
    },
    minus: num => {
      dispatch(minus(num));
    },
    asyncMinus: num => {
      dispatch(asyncMinus(num));
    },
    getJson: title => {
      dispatch(getJson(title));
    }
  };
};

//Appコンポーネントとstate&dispatchをconnectしてexportする
//connect: componentに対してstateとdispatchを結びつける

//connectでAppコンポーネントに「state」と「actionをdispatchするメソッド」を渡す
export default connect(mapStateToProps, mapDispatchToProps)(App);
