import {
  CREATE_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  LOAD_TODOS_FAILURE,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  ADD_TODO,
  completeTodo
} from "./actions";

export const isLoading = (state = true, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_TODOS_FAILURE: 
    case LOAD_TODOS_SUCCESS: {
      state = false;
      return state
    }
    case LOAD_TODOS_IN_PROGRESS: {
      state = true;
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
      // const text = payload;
      // const newTodo = {
      //   text: text,
      //   isCompleted: false,
      // };
      // return state.concat(newTodo);
    }
    case ADD_TODO:{
      const newTodo = payload;
      return state.concat(newTodo);
    }
    case REMOVE_TODO: {
      const id = payload.id;
      return state.filter((todo) => todo.id !== id);
    }
    case COMPLETE_TODO: {
      const updated = payload
      return state.map(todo=>{
        if (todo.id === updated.id){
          return updated
        } return todo
      })
    }
    case LOAD_TODOS_SUCCESS: {
      const todos = payload;
      return todos
    }
    case LOAD_TODOS_FAILURE:
    case LOAD_TODOS_IN_PROGRESS:
    default:{
      return state;}
  }
};
