import React from "react";
import NewTodoForm from "./NewTodoForm";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import { completeTodo, removeTodo } from "./actions";
import "./TodoList.css";

function TodoList({ todos, onRemove, onCompleted }) {
  console.log("TodoList>>>", todos);
  return (
    <>
      <NewTodoForm />
      <section className="list-wrapper">
        {todos.map((todo) => (
          <TodoItem todo={todo} onCompleted={onCompleted} onRemove={onRemove} />
        ))}
      </section>
    </>
  );
}

const mapStateToProps = (state) => ({ todos: state.todos });
const mapDispatchToProps = (dispatch) => ({
  onRemove: (text) => dispatch(removeTodo(text)),
  onCompleted : (text)=>dispatch(completeTodo(text))
});
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
