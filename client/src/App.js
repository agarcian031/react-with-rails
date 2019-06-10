import React from "react";
import { Header, Container } from "semantic-ui-react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import axios from 'axios'; 
import "./App.css";

class App extends React.Component {
  state = {
    todos: []
  };

  componentDidMount() {
    // TODO make a call to our rails server to get Items
    axios.get("/api/items")
    .then( res => {
      this.setState({todos: res.data})
    })
    .catch( error => {
      console.log(error)
    })
  }

  addItem = (name) => {
    // TODO make an api call to rails serve to add an item
    // TODO add new todo to state
    axios.post("/api/items", {name: name})
    .then(res => {
      this.setState({todos: [...this.state.todos, res.data]})
    })
  };

  updateTodo = (id) => {
    // TODO to make an api call to rails server to update todo
    // TODO update todo
    axios.put(`/api/items/${id}`)
    .then(res => {
      const todos = this.state.todos.map( t => {
        if(t.id === id)
          return res.data; 
        return t; 
      });
      this.setState({todos,}); 
    })
  };

  deleteTodo = (id) => {
    // TODO make api call to rails server to delete todo
    // TODO remove todo from state
    axios.delete(`/api/items/${id}`)
    .then(res => {
      const {todos,} = this.state; 
      this.setState({todos: todos.filter( t => t.id !== id), })
    })
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
