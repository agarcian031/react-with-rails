import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class TodoForm extends Component {
  state = {
    name: ""
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    // prevents browser from refreshing
    event.preventDefault();
    this.props.addItem(this.state.name);
    this.setState({ name: "" });
  };

  render() {
    const { name } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input label="Todo" placeholder="Add A Todo" required value={name} onChange={this.handleChange} />
      </Form>
    );
  }
}

export default TodoForm;
