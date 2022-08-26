import React from 'react'

function Todo({ todo, toggleCompleted }) {
  const handleTodoClick = () => {
    toggleCompleted(todo.id);
  }
  return (
    <div>
      <label>
        <input type="checkbox" checked={ todo.completed } readOnly onChange={ handleTodoClick }></input>
        { todo.name }
      </label>
    </div>
  )
}

export default Todo
