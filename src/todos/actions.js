export const CREATE_TODO = "CREATE-TODO";
export const createTodo = (text) => ({
  type: CREATE_TODO,
  payload: text,
});

export const REMOVE_TODO = "REMOVE-TODO";
export const removeTodo = (Todo) => ({
  type: REMOVE_TODO,
  payload: Todo,
});

export const COMPLETE_TODO = "COMPLETE_TODO";
export const completeTodo = (completeTodo) => ({
  type: COMPLETE_TODO,
  payload: completeTodo,
});

export const LOAD_TODOS_IN_PROGRESS = "LOAD_TODOS_IN_PROGRESS";
export const LoadTodosInProgress = () => ({
  type: LOAD_TODOS_IN_PROGRESS,

});

export const LOAD_TODOS_SUCCESS = "LOAD_TODOS_IN_SUCCESS";
export const LoadTodosSuccess= (todos) => ({
  type: LOAD_TODOS_SUCCESS,
  payload:todos,

});

export const LOAD_TODOS_FAILURE = "LOAD_TODOS_FAILURE";
export const LoadTodosFailure = () => ({
  type: LOAD_TODOS_FAILURE,

});

export const ADD_TODO = "ADD_TODO";
export const addTodo = (todo) => ({
  type:ADD_TODO,
  payload: todo,
})