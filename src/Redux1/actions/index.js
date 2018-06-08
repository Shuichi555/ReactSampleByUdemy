//action creaters　file

import axios from "axios";

export const plus = num => {
  return { type: "PLUS", payload: { num: num } };
};

export const minus = num => {
  return { type: "MINUS", payload: { num: num } };
};

// redux-thunk（非同期処理）使用の場合、functionそのものを返すようにする必要あり
/* not working
export const asyncMinus = num => {
  setTimeout(() => {
    return { type: "MINUS", payload: { num: num } };
  }, 2000);
};
*/
// redux-thunk（非同期処理）使用の場合、functionそのものを返すようにする必要あり
export const asyncMinus = num => {
  //dispatch を受け取って dispatch　を返す(dispatchを内部でおこなう)
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: "MINUS", payload: { num: num } });
    }, 1000);
  };
};

//取得したJsonでタイトルを変更する処理を追加するためのメソッド
export const changeTitle = title => {
  return { type: "CHANGE_TITLE", payload: { title: title } };
};

// axios を　Reduxで使う場合の例
export const getJson = () => {
  //return に　functionを渡す

  // Wait追加(Jsonが取得できる間、タイトルがWaitになり、その後Jsonで再度dispatch)
  return dispatch => {
    dispatch({ type: "WAIT" });

    const url = "https://api.myjson.com/bins/17fh16";

    axios.get(url).then(res => {
      console.log(res.data);

      //method呼び出し
      // res.data配列の0番目のデータのnameにアクセスしている
      dispatch(changeTitle(res.data.member[0].name));

      //取得したJsonでタイトルを変更する処理を追加
      //      dispatch({ type: "CHANGE_TITLE", payload:{title: res.data.}});

      //this.setState(res.data);
    });
  };
};

/* ???
    return dispatch => {
    dispatch({type: "WAIT"});

    setTimeout(() => {
      dispatch(minus(num));
      dispatch({type: "DONE"});
    }, 2000);
  }
*/
