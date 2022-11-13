import React from "react";
import NewTodoForm from "./NewTodoForm";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import { removeTodo } from "./actions";
import "./TodoList.css";

function TodoList({ todos, onRemove }) {
  console.log("TodoList>>>", todos);
  return (
    <>
      <NewTodoForm />
      <section className="list-wrapper">
        {todos.map((todo) => (
          <TodoItem todo={todo} onRemove={onRemove} />
        ))}
      </section>
    </>
  );
}

const mapStateToProps = (state) => ({ todos: state.todos });
const mapDispatchToProps = (dispatch) => ({
  onRemove: (text) => dispatch(removeTodo(text)),
});
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
