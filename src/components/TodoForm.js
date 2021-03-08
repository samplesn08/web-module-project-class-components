import React from 'react';

const TodoForm = ({ changeHandler, submitHandler }) => {
    return (
        <form onSubmit={submitHandler}>
            <input type='text' placeholder='New Task' onChange={changeHandler} />
        </form>
    )
}

export default TodoForm;