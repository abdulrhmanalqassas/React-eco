import React, { useState } from "react";
import { connect } from "react-redux";
import { getTodos } from "./selector";
import { createTodo } from "./actions";
import styled from "styled-components";

const NewForm = styled.div`
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 8px grey;
`;
const NewTodoInput = styled.input`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-bottom: 2px solid #ddd;
  border-radius: 8px;
  width: 70%;
  outline: none;
`;

const NewTodoButt = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  margin-left: 8px;
  width: 20%;
  background-color: #22ee22;
`;

function NewTodoForm({ todos, onCreate, onAddTodo }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <NewForm>
      <NewTodoInput
        type="text"
        placeholder="type your new todo here"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></NewTodoInput>
      <NewTodoButt
        onClick={() => {
          const isDuplicateText = todos.some(
            (todo) => todo.text === inputValue
          );
          if (!isDuplicateText) {
            onAddTodo(inputValue);
            setInputValue("");
          } else alert(`you add ${inputValue}, to your todos before`);
        }}
      >
        Add todo
      </NewTodoButt>
    </NewForm>
  );
}

const mapStateToProps = (state) => ({
  todos: getTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCreate: (text) => dispatch(createTodo(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
