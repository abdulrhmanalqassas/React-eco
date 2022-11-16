import { createAction } from "@reduxjs/toolkit";
import {
  LoadTodosInProgress,
  LoadTodosFailure,
  LoadTodosSuccess,
  addTodo,
  removeTodo,
  completeTodo,
} from "./actions";

const url = "http://localhost:8080/todos/";

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(LoadTodosInProgress());
    const response = await fetch(url);
    const todos = await response.json();
    dispatch(LoadTodosSuccess(todos));
  } catch (e) {
    dispatch(LoadTodosFailure(e));
    dispatch(displayAlert(e));
  }
};

export const addTodoRequest = (text) => async (dispatch) => {
  try {
    const body = JSON.stringify({ text });
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body,
    });
    const todo = await response.json();
    dispatch(addTodo(todo));
  } catch (e) {
    dispatch(displayAlert(e));
  }
};

export const removeTodoRequest = (id) => async (dispatch) => {
  try {
    const response = await fetch(url + id, {
      method: "delete",
    });

    const removedTodo = await response.json();
    dispatch(removeTodo(removedTodo));
  } catch (e) {
    displayAlert(e);
  }
};

export const updateTodoRequest = (id) => async (dispatch) => {
  try {
    const response = await fetch(`${url}${id}/completed`,{
      method:"post",
    }) 
    const updatedTodo = await response.json();
    dispatch(completeTodo(updatedTodo))
  } catch (e) {
    displayAlert(e)
  }
};
export const displayAlert = (text) => {
  alert(`alert :  ${text}`);
};
