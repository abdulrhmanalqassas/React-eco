import React from "react";
import TodoList from "./todos/TodoList";
import "./App.css";

// const todos = [{text:"my bad todo"}]
const App = () => {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
};

export default App;
