import React from "react";

export class TodoList extends React.Component {
  state = {
    todo: "",
    items: [],
  };
  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };
  handleClickButton = () => {
    this.setState((state) => {
      const items = state.items.concat(state.todo);
      return {
        todo: "",
        items,
      };
    });
  };
  handleResetButton = () => {
    this.setState({
      items: [],
    });
  };
  handleRemoveTodo = (i) => {
    const array = [...this.state.items];
    array.splice(i, 1);
    this.setState({
      items: array,
    });
  };
  render() {
    return (
      <div>
        <input
          name="todo"
          value={this.state.todo}
          onChange={this.handleInputChange}
        ></input>
        <button onClick={this.handleClickButton}>Insert TODO</button>
        <button onClick={this.handleResetButton}>Reset</button>
        <ul>{this.props.render(this.state.items, this.handleRemoveTodo)}</ul>
      </div>
    );
  }
}
