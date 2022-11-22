import {
  CREATE_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  LOAD_TODOS_FAILURE,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  ADD_TODO,
  completeTodo,
} from "./actions";

const initState = {
  isLoading: false,
  data: [],
};


export const todos = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TODO: {
      const newTodo = payload;
      return { ...state, data: state.data.concat(newTodo) };
    }
    case REMOVE_TODO: {
      const id = payload.id;
      return { ...state, data: state.data.filter((todo) => todo.id !== id) };
    }
    case COMPLETE_TODO: {
      const updated = payload;
      return {
        ...state,
        data: state.data.map((todo) => {
          if (todo.id === updated.id) {
            return updated;
          }
          return todo;
        }),
      };
    }
    case LOAD_TODOS_SUCCESS: {
      const todos = payload;
      return {
        ...state,
        isLoading: false,
        data: todos,
      };
    }
    case LOAD_TODOS_IN_PROGRESS:return {...state , isLoading: true}
    case LOAD_TODOS_FAILURE:return {...state , isLoading: false};
    default: {
      return state;
    }
  }
};
