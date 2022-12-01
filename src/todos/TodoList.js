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
import rocket from "../images/rocket.png" 


const Header = styled.header`
display: flex;
position : fixed;
top:0;
width: 100%;
z-index: -2;
align-items:center;
height: 140px;
background-color:rgb(7, 7, 7);

`
const LogoText = styled.h1`
background: linear-gradient(0deg, #5E60CE 0%, #00d9f5 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
margin:0 auto;
font-size: 57px;
`



const Loading = styled.h1`
margin:5rem;
font : 100px
font-family: Arial, Helvetica, sans-serif;
color: #4EA8DE;
`;

const TodoHeader = styled.h3`
  background: linear-gradient(0deg, #5E60CE 0%, #00d9f5 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
font-size: 25px;
  margin-left:10% ;
`
const ListWrapper = styled.section`

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
    <ListWrapper>
      {todos.map((todo) => (
        <TodoItem
        key={todo.id}
          todo={todo}
          onAlert={onAlert}
          onCompleted={onCompleted}
          onRemove={onRemove}
        />
      ))}
    </ListWrapper>
  );
  const content = (
    <  >
       <Header>
        <LogoText  > <img  alt="logo" style={{width:"40px",}} src={rocket} ></img> TODO</LogoText>
      </Header>
      <NewTodoForm onAddTodo={onAddTodo} />
      <TodoHeader>complete Todo</TodoHeader>
      {list(completeTodos)}
      <TodoHeader>incomplete Todos</TodoHeader>
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
  onAddTodo: (text,tittle) => dispatch(addTodoRequest(text,tittle)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
