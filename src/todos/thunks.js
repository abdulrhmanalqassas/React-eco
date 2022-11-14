import {
  LoadTodosInProgress,
  LoadTodosFailure,
  LoadTodosSuccess,
} from "./actions";

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(LoadTodosInProgress());
  const response = await fetch("http://localhost:8080/todos");
  const todos = await response.json();
  dispatch(LoadTodosSuccess(todos))
  } catch (e) {
    dispatch(LoadTodosFailure(e));
    dispatch(displayAlert(e))
  }

};

export const displayAlert = (text) => {
  alert(`YOU REMOVED THE NEXT TASK :  ${text}`);
};
