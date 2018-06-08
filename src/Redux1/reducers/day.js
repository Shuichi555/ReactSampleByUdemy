// reducers の中の　day を管理するコンポーネント
// 今回は初期値をそのまま返す、実際はここでswitch,caseで条件分岐させてコントロール
const day = (state = "test day 2018-06-07", action) => {
  switch (action.type) {
    /*
    case "PLUS":
      return state + action.payload.num;
    case "MINUS":
      return state - action.payload.num;
*/
    default:
      return state;
  }
};

export default day;
