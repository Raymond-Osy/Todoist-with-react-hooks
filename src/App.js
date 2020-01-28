import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: "Complete articles on hooks",
      isDone: false
    },
    {
      text: "Make a podcast on react",
      isDone: false
    },
    {
      text: "Finish tutorial on life-cycle methods",
      isDone: false
    }
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, {text}]
    setTodos(newTodos);
  }

  const handleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  }

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo key={index} index={index} todo={todo} handleComplete={handleComplete} handleDelete={handleDelete} />
      ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  );
};

export default App;
