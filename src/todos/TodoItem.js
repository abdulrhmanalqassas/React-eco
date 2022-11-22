import React from "react";
import "./TodoItem.css"

export default function TodoItem({ todo,onRemove,onCompleted,onAlert }) {

  return (
    <div className="todo-item-container">
      <h1>{todo.text}</h1>
      <div className="buttons-container">
        {!todo.isCompleted && <button 
        onClick={()=>onCompleted(todo.id)}
        className="completed-button">Marked as completed </button>}
        <button
        onClick={()=>onRemove(todo.id) }
        className="remove-button"> Remove </button>
        <p>Created At : {Date(todo.createdAt)}</p>
      </div>
    </div>
  );
}
