import React, { useState } from "react";
import "./App.css";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="add todo..."
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
};

export default TodoForm;
