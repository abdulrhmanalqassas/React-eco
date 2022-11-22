import { createSelector } from "reselect"


export const getTodosLoading = state=> state.todos.isLoading
export const getTodos = state=> state.todos.data

export const getIncompleteTodos = createSelector(
    getTodos,
    (todos)=> todos.filter(todo=> !todo.isCompleted),
)

export const getCompleteTodos = createSelector(
    getTodos,
    (todos)=> todos.filter(todo=> todo.isCompleted),
)

