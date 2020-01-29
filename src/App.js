import React, { useState } from "react";
import Todo from "./component/Todo";
import TodoForm from "./component/TodoForm";
import "./styles/css/index.css";

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

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const handleComplete = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = !todos[index].isDone;
    setTodos(newTodos);
  };

  const handleDelete = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Simple Todoist App</h1>
      <div className="container">
        <p>Hey there! am here to help you get a lot done. Just type what you wanna do, hit enter to add, hit done when you're done or hit the X to delete. Let's get productive buddy.</p>
        <div>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
            />
          ))}
        </div>
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
};

export default App;
