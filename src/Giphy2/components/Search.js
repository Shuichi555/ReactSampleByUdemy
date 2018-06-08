// 以前作った（Giphy1)AddTodo.jsの内容をコピー
// handleメソッド未修正

import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  render() {
    // #68 buttonText追加(this.props内から{}で直接取得)
    const { buttonText } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.title} onChange={this.handleChange} />
          <input type="submit" value={buttonText} />
        </form>
      </div>
    );
  }

  // #67 containers/Search.js　で作成した〜を受け取る

  //eventオブジェクトを引数で受けとって、event内のtarget.valueを取得
  //取得したvalueをsetState
  handleChange = event => {
    const title = event.target.value;
    this.setState({ title: title });
    //    console.log(this.state.title);
  };

  handleSubmit = event => {
    // #67 取得したURLリストを使う準備
    const { getUrls } = this.props;

    //そのままだとonSubmit押下で画面遷移してしまうため記載
    event.preventDefault();

    // #67
    getUrls(this.state.title);

    //propsで渡ってきたTodoApp.addTodoメソッド呼び出し
    //this.props.addTodo(this.state.title);

    //入力後にformを空にする
    this.setState({ title: "" });
  };
}

export default Search;
