import React, { useState } from "react";
import { connect } from "react-redux";
import { getTodos } from "./selector";
import { addTodo } from "./actions";
import styled from "styled-components";

const NewForm = styled.div`
  margin-top: 100px;
  text-align: center;
  z-indx: 5;
`;
const NewTodoInput = styled.input`
  color: #f2f2f2;
  border: 1px solid #0d0d0d;
  border-radius: 8px;
  margin: 5px;
  background: #454545;
  font-size: 16px;
  padding: 8px;
  border: none;
  width: 100%;
  outline: none;
`;
const InputWarper = styled.div`
margin-top:100px;
  width: 50%;
  margin: 10px;
  display: flex;
  flex-direction: column;
  margin 0 auto ;
  align-items: center;
  padding: 8px;
`;


const NewTodoButt = styled.button`
  font-size: 16px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 140%;
  color: #f2f2f2;
  padding: 8px;
  min-width: 20%;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  margin-left: 8px;
  background: #1e6f9f;
`;

function NewTodoForm({ todos, onCreate, onAddTodo }) {
  const [inputValue, setInputValue] = useState("");
  const [tittleValue, setTittleValue] = useState("");
  return (
    <NewForm>
      <InputWarper>
        <NewTodoInput
          type="text"
          placeholder="type your Tittle here"
          value={tittleValue}
          onChange={(e) => setTittleValue(e.target.value)}
        ></NewTodoInput>
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
              onAddTodo(inputValue, tittleValue);
              setInputValue("");
              setTittleValue("");
            } else alert(`you add ${inputValue}, to your todos before`);
          }}
        >
          Add todo
        </NewTodoButt>
      </InputWarper>
    </NewForm>
  );
}

const mapStateToProps = (state) => ({
  todos: getTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCreate: (text, tittle) => dispatch(addTodo(text, tittle)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
