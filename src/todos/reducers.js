import {
  CREATE_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  LOAD_TODOS_FAILURE,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
} from "./actions";

export const isLoading = (state = true, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_TODOS_FAILURE: {
      state = false;
      return state
    }
    case LOAD_TODOS_IN_PROGRESS: {
      state = true;
      return state
    }
    case LOAD_TODOS_SUCCESS: {
      state = false;
      return state
    }
    default: {
      return state ;
    }
  }
};

export const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const text = payload;
      const newTodo = {
        text: text,
        isCompleted: false,
      };
      return state.concat(newTodo);
    }

    case REMOVE_TODO: {
      const text = payload;
      return state.filter((todo) => todo.text !== text);
    }
    case COMPLETE_TODO: {
      const text = payload;
      return state.map((todo) => {
        if (todo.text === text) {
          todo.isCompleted = true;
        }
        return todo;
      });
    }
    default:
      return state;
  }
};
