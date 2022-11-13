import React, { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "./actions";
import "./NewTodoForm.css";

function NewTodoForm({ todos, onCreate }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="type your new todo here"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button
        onClick={() => {
            const isDuplicateText = todos.some(todo=>
                {todo})
          onCreate(inputValue);
          setInputValue("");
        }}
        className="new-todo-button"
      >
        Add todo
      </button>
    </div>
  );
}

const mapStateToProps = state => ({
  todos: state.todos,
});
const mapDispatchToProps = dispatch => ({
  onCreate:text=> dispatch(createTodo(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
