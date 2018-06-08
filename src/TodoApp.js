import React from "react";
import { AddTodo } from "./components/AddTodo";
import { List } from "./components/List";

/*
TodoApp：　親クラス　AddTodoにaddTodoメソッドを渡している
AddTodo：　子クラス
*/

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      nextId: 0
    };
  }

  render() {
    const { todos } = this.state;
    /* 
    <List deleteTodo={this.deleteTodo} todos={this.state.todos} />
*/

    //   addTodo, deleteTodoをList.jsに渡す
    return (
      <div>
        <h2>TodoApp</h2>
        <AddTodo addTodo={this.addTodo} />
        <List deleteTodo={this.deleteTodo} todos={todos} />
      </div>
    );
  }
  //titleを受け取って新データとしてセット
  addTodo = title => {
    const { todos, nextId } = this.state;
    /* 
      todos: [...this.state.todos, { id: this.state.nextId + 1, title: title }],
      nextId: this.state.nextId + 1
*/

    //既存のtodos配列内データを”...this.state.todos”と記載できる
    //追加データをその後に記載して、全体をtodos配列リストとしてセット
    this.setState({
      todos: [...todos, { id: nextId + 1, title: title }],
      nextId: nextId + 1
    });
  };

  //削除するデータのidを受け取って、対象データを削除
  deleteTodo = id => {
    const { todos } = this.state;
    /* 
      todos: this.state.todos.filter(todo => {
*/
    this.setState({
      //idが一致しない（=削除対象外）データのリストを返す
      todos: todos.filter(todo => {
        return todo.id !== id;
      })
    });
  };
}
