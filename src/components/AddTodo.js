import React from "react";

export class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  render() {
    return (
      <div>
        <h2>AddTodo</h2>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.title} onChange={this.handleChange} />
          <input type="submit" value="Add to do list" />
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

    //propsで渡ってきたTodoApp.addTodoメソッド呼び出し
    this.props.addTodo(this.state.title);

    //入力後にformを空にする
    this.setState({ title: "" });
  };
}
