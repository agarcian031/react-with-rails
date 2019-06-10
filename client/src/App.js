import React from "react";
import { Header, Container } from "semantic-ui-react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        name: "Buy Milk",
        complete: false
      },
      {
        id: 1,
        name: "Buy Cheese",
        complete: true
      }
    ]
  };

  componentDidMount() {
    // TODO make a call to our rails server to get Items
  }

  addItem = (name) => {
    // TODO make an api call to rails serve to add an item
    // TODO add new todo to state
  };

  updateTodo = (id) => {
    // TODO to make an api call to rails server to update todo
    // TODO update todo
  };

  deleteTodo = (id) => {
    // TODO make api call to rails server to delete todo
    // TODO remove todo from state
  };

  render() {
    return (
      <Container style={{ padding: "30px 0" }}>
        <Header as="h1" textAlign="center">
          Rails/React Todo List
        </Header>
        <br />
        <TodoForm addItem={this.addItem} />
        <br />
        <br />
        <TodoList todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
      </Container>
    );
  }
}

export default App;
