import React,{useEffect} from "react";
import NewTodoForm from "./NewTodoForm";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import { completeTodo, removeTodo } from "./actions";
import { displayAlert,loadTodos } from "./thunks";
import "./TodoList.css";

function TodoList({ todos, onRemove, onCompleted, onAlert, isLoading ,startLoadingTodos}) {

  useEffect(()=>{
   startLoadingTodos();
  },[]
    
  )

  const loading = (
    <>
      <h1>LOADING...</h1>
    </>
  );

  const content = (
    <>
      <NewTodoForm />
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
  startLoadingTodos :()=> dispatch(loadTodos()),
  onRemove: (text) => dispatch(removeTodo(text)),
  onCompleted: (text) => dispatch(completeTodo(text)),
  onAlert: (text) => dispatch(displayAlert(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
