import React, { Component } from 'react';

// Create a stateless component of TodoItem
const TodoItem = todo => (
  <div>{ todo.title }</div>
);

// Create a stateless component of TodoItem
const TodoList = props => (
  <div>
  // Map todos into TodoItem component, send the key and pass props with spread operator
  { props.todos.map(todo => <TodoItem key={todo.id} {...todo} />) }
  </div>
);

class Dashboard extends Component {

  constructor() {
    super(); // super() will call the constructor of a parent class
    this.state = {
      todos: [
        {
          id: 1,
          title: "Prepare January Meeting Documents",
          issuer: 5,
          description: "lorem ipsum!",
        },
        {
          id: 2,
          title: "Prepare February Meeting Documents",
          issuer: 5,
          description: "lorem ipsum!",
        },
        {
          id: 3,
          title: "Prepare March Meeting Documents",
          issuer: 5,
          description: "lorem ipsum!",
        },
      ],
    }
  }
  render() {
    return (
      <div className="dashboard">
        <TodoList todos={this.state.todos}></TodoList>
      </div>
    );
  }
}

export default Dashboard;
