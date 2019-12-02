import React from "react";
import Form from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          task: 'Todo 1',
          id: 1,
          completed: false
        },
        {
          task: 'Todo 2',
          id: 2,
          completed: false
        }
      ],

      input: ""
    };

    this.addTodo = this.addTodo.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
    this.toggleTodoComplete = this.toggleTodoComplete.bind(this);
  }

  addTodo(event, todoTask) {
    event.preventDefault();
    const existing = this.state.todos.filter(todo => todo.task === todoTask);
    if (existing.length === 0) {
      const newTodo = {
        task: todoTask,
        id: Date.now(),
        completed: false
      };

      this.setState({
        todos: [...this.state.todos, newTodo]
      });
    }
  }

  toggleTodoComplete(id) {
    const updatedTodos = this.state.todos.map(todo => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });

    this.setState({
      todos: updatedTodos
    });
  }

  clearCompleted = event => {
    event.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  };

  onInputChange = event => {
    this.setState({
      ...this.state,
      input: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} onClick={this.toggleTodoComplete}/>
        <Form addTodo={this.addTodo} onInputChange={this.onInputChange} value={this.state.input} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
