import React, { useEffect } from "react";
import NewTodoForm from "./NewTodoForm";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import {
  getTodosLoading,
  getCompleteTodos,
  getIncompleteTodos,
} from "./selector";
import { connect } from "react-redux";
import {
  displayAlert,
  loadTodos,
  addTodoRequest,
  removeTodoRequest,
  updateTodoRequest,
} from "./thunks";

const Loading = styled.h1`

margin:5rem;
font : 100px
font-family: Arial, Helvetica, sans-serif;
color: red;
`;

const ListWarpper = styled.section`
  max-width: 700px;
  margin: auto;
`;

function TodoList({
  completeTodos,
  incompleteTodos,
  onRemove,
  onCompleted,
  onAlert,
  isLoading,
  startLoadingTodos,
  onAddTodo,
}) {
  useEffect(() => {
    startLoadingTodos();
  }, []);

  const loading = (
    <>
      <Loading>LOADING...</Loading>
    </>
  );
  const list = (todos) => (
    <ListWarpper>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          onAlert={onAlert}
          onCompleted={onCompleted}
          onRemove={onRemove}
        />
      ))}
    </ListWarpper>
  );
  const content = (
    <>
      <NewTodoForm onAddTodo={onAddTodo} />
      <h1 style={{ color: "white" }}>complete Todo</h1>
      {list(completeTodos)}
      <h1 style={{ color: "white" }}>incomplete Todos</h1>
      {list(incompleteTodos)}
    </>
  );

  return isLoading ? loading : content;
}

const mapStateToProps = (state) => ({
  completeTodos: getCompleteTodos(state),
  incompleteTodos: getIncompleteTodos(state),
  isLoading: getTodosLoading(state),
});
const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemove: (id) => dispatch(removeTodoRequest(id)),
  onCompleted: (id) => dispatch(updateTodoRequest(id)),
  onAlert: (text) => dispatch(displayAlert(text)),
  onAddTodo: (text) => dispatch(addTodoRequest(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
