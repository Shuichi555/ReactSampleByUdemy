import React from "react";

export class List extends React.Component {
  constructor(props) {
    super(props);
  }

  //配列を扱う場合、<li>タグに配列のkeyを渡すとエラーが解消される
  render() {
    //リファクタリング
    const { deleteTodo, todos } = this.props;
    /*
    const list = this.props.todos.map(todo => {
              this.props.deleteTodo(todo.id);
*/

    const list = todos.map(todo => {
      return (
        <li key={todo.id}>
          #{todo.id} {todo.title}{" "}
          <button
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            delete
          </button>
        </li>
      );
    });
    return (
      <div>
        <h2>List</h2>
        <ul>{list}</ul>
      </div>
    );
  }
}
