import React from "react";
import "./TodoItem.css"

export default function TodoItem({ todo,onRemove,onCompleted,onAlert }) {
  console.log("TodoItem",todo)
  return (
    <div className="todo-item-container">
      <h1>{todo.text}</h1>
      <div className="button-container">
        {!todo.isCompleted && <button 
        onClick={()=>onCompleted(todo.text)}
        className="completed-button">Marked as completed </button>}
        <button
        onClick={()=>{onRemove(todo.text) ; onAlert(todo.text)}}
        className="remove-button"> Remove </button>
      </div>
    </div>
  );
}
