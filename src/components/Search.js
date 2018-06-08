import React from "react";

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  render() {
    return (
      <div>
        <h2>Find your GIF</h2>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.title} onChange={this.handleChange} />
          <input type="submit" value="Search!!" />
        </form>
      </div>
    );
  }

  //eventオブジェクトを引数で受けとって、event内のtarget.valueを取得
  //取得したvalueをsetState
  handleChange = event => {
    const title = event.target.value;
    this.setState({ title: title });
    //    console.log(this.state.title);
  };

  handleSubmit = event => {
    //そのままだとonSubmit押下で画面遷移してしまうため記載
    event.preventDefault();

    //propsで渡ってきたsearchメソッド呼び出し？
    this.props.search(this.state.title);

    //入力後にformを空にする
    this.setState({ title: "" });
  };
}
