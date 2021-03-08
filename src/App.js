import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

const todos = [
  {
    task: 'Organize Garage',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: Date.now(),
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }

  toggleComplete = (clickedId) => {
    this.setState({
      todos: this.state.todos.map((item) => {
        if (item.id === clickedId) {
          return {
            ...item, completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
  }

  addTask = (taskName) => {
    const newTask = {
      name: taskName,
      id: Date.now(),
      completed: false,
    }
    this.setState({
    todos: [...this.state.todos, newTask],
    })
  }

  clearHandler = event => {
    event.preventDefault();
    const newTodos = this.state.todos.filter(item => item.completed === false)
    this.setState({
      todos: newTodos
    })
}

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} toggleComplete={this.toggleComplete}/>
        <TodoForm todos={this.state.todos} clearHandler={this.clearHandler} addTask={this.addTask} changeHandler={this.changeHandler}/>
      </div>
    );
  }
}

export default App;
