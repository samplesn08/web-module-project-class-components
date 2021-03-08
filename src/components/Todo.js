import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <div onClick={() => props.toggleComplete(props.todo.id)} className={`item${props.todo.completed ? ' completed' : ''}`}>
            <p>{props.todo.name}</p>
        </div>
    )
}

export default Todo;