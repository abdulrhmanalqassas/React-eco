import React from "react";
import NewTodoForm from "./NewTodoForm";
import TodoItem from "./TodoItem";

import "./TodoList.css"

export default function TodoList({ todos }) {
  return (
    <>
    <NewTodoForm/>
    <section className="list-wrapper">
      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </section>
    </>
    
  );
}
