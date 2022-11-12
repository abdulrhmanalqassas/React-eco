import React from "react";
import "./TodoItem.css"

export default function TodoItem({ todo }) {
  return (
    <div className="todo-item-container">
      <h1>{todo.text}</h1>
      <div className="button-container">
        <button className="completed-button">Marked as completed </button>
        <button className="remove-button"> Remove </button>
      </div>
    </div>
  );
}
