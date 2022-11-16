import React, { useEffect } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import {
  displayAlert,
  loadTodos,
  addTodoRequest,
  removeTodoRequest,
  updateTodoRequest
} from "./thunks";
import "./TodoList.css";

function TodoList({
  todos=[],
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
      <h1>LOADING...</h1>
    </>
  );

  const content = (
    <>
      <NewTodoForm onAddTodo={onAddTodo} />
      <section className="list-wrapper">
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            onAlert={onAlert}
            onCompleted={onCompleted}
            onRemove={onRemove}
          />
        ))}
      </section>
    </>
  );

  return isLoading ? loading : content;
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  isLoading: state.isLoading,
});
const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemove: (id) => dispatch(removeTodoRequest(id)),
  onCompleted: (id) => dispatch(updateTodoRequest(id)),
  onAlert: (text) => dispatch(displayAlert(text)),
  onAddTodo: (text) => dispatch(addTodoRequest(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
