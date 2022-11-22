import React from "react";
import styled from "styled-components";

const TodoItemContainer = styled.div`
  background: rgb(255, 255, 255);
  height: fit-content;
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px grey;
`;

const ButtonsContainer = styled.div`
 
  right: 12px;
  bottom: 12px;
`;

const CompletedButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
  background-color: #22ee22;
`;

const RemoveButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
  background-color: #ee2222;
  margin-left: 8px;
`;

const TodoText = styled.h1`
max-width:100%;
height: fit-content;
border : black solid 4px;
overflow:hidden ;
text-overflow: ellipsis;

`

export default function TodoItem({ todo, onRemove, onCompleted, onAlert }) {
  return (
    <TodoItemContainer>
      <TodoText>{todo.text}</TodoText>
      <ButtonsContainer>
        {!todo.isCompleted && (
          <CompletedButton
            onClick={() => onCompleted(todo.id)}
            className="completed-button"
          >
            Marked as completed{" "}
          </CompletedButton>
        )}
        <RemoveButton
          onClick={() => onRemove(todo.id)}
          className="remove-button"
        >
          {" "}
          Remove{" "}
        </RemoveButton>
        <p>Created At : {Date(todo.createdAt)}</p>
      </ButtonsContainer>
    </TodoItemContainer>
  );
}
