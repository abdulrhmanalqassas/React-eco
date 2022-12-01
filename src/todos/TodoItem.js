import React from "react";
import styled from "styled-components";
import trash from "../images/trash.png";

const TodoItemContainer = styled.div`
  background: #454545;
  height: fit-content;
  border-radius: 8px;
  border-bottom: ${(props) =>
    new Date(props.createdAt) > Date.now() - 854000 * 3
      ? "4px solid #00f5a0"
      : " 4px solid #E25858"};
  margin-top: 10px;
  padding: 10px;
  position: relative;
  box-shadow: 0 2px 4px grey;
  color: #f2f2f2;
`;

const ButtonsContainer = styled.div`
  right: 12px;
  bottom: 12px;
  align-items: center;
  display: flex;
`;

const Button = styled.button`
  all: unset;
  font-size: 14px;
  padding: 5px;
  border: none;
  border-radius: 8px;
  outline: none;
  background-color: none;
  cursor: pointer;
  display: inline-block;
`;

const CompletedButton = styled(Button)`
  background-color:#5E60CE;
`;

const RemoveButton = styled(Button)`
  margin-left: 8px;
`;

const TodoText = styled.h4`
  max-width: 100%;
  height: fit-content;
  font-size:17px;
  margin:5px;
  padding-left: 10px;
  border-bottom: gray solid 2px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default function TodoItem({ todo, onRemove, onCompleted }) {
  return (
    <TodoItemContainer createdAt={todo.createdAt}>
      <h1 style={{margin: "0"}} >{todo.tittle}</h1>
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
          <img src={trash}></img>
        </RemoveButton>
      </ButtonsContainer>
      <p style={{margin: "0"}} >Created At : {Date(todo.createdAt)}</p>
    </TodoItemContainer>
  );
}
