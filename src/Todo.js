import React from "react";
import "./App.css";

const Todo = ({ index, todo, handleComplete, handleDelete }) => {
  return (
    <div style={{ textDecoration: todo.isDone ? "line-through" : "" }} className="todo">
      {todo.text}
      <div>
        <button onClick={() => handleComplete(index)}>Complete</button>
        <button onClick={() => handleDelete(index)}>X</button>
      </div>
    </div>
  );
};

export default Todo;
