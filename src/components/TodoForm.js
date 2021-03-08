import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            itemText: ''
        }
    }
    changeHandler = event => {
        this.setState({
          ...this.state, [event.target.name]: event.target.value
        })
      };

    submitHandler = event => {
        event.preventDefault();
        this.props.addTask(this.state.itemText);
        this.setState({
          itemText: ''
        })
      };
    
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type='text' name='itemText' value={this.state.itemText} placeholder='New Task' onChange={this.changeHandler} />
                <button>Add Task</button><br></br><br></br>
                <button onClick={this.props.clearHandler}>Clear Completed</button>
            </form>
        );
    }
}

export default TodoForm;