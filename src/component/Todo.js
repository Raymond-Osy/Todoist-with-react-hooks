import React from "react";
import "../styles/css/index.css";

const Todo = ({ index, todo, handleComplete, handleDelete }) => {
  return (
    <div className="todo-list" style={{ textDecoration: todo.isDone ? "line-through" : "" }} className="todo">
      <p className="todo-font">{todo.text}</p>
      <div>
        <button onClick={() => handleComplete(index)}>Done</button>
        <button onClick={() => handleDelete(index)}>X</button>
      </div>
    </div>
  );
};

export default Todo;
