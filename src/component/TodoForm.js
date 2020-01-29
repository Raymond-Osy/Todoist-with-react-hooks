import React, { useState } from "react";
import "../styles/css/index.css";


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
        placeholder="Add todo..."
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
};

export default TodoForm;
