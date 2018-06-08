// reducers の中の　titleを管理するコンポーネント
// 今回は初期値をそのまま返す、実際はここでswitch,caseで条件分岐させてコントロール

// axiosで取得したJsonでタイトルを変更するよう追加
const title = (state = "test title", action) => {
  switch (action.type) {
    case "CHANGE_TITLE":
      return action.payload.title;

    // データ取得してから画面表示をするようにWAITというcaseを追加してみる
    case "WAIT":
      return "Wait";

    default:
      return state;
  }
};

export default title;
