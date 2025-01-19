import React, { useState } from "react";

export default function ToDoInput({ handleAddTodos }) {
  const [todoValue, setTodoValue] = useState("");

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        placeholder="Enter ToDo..."
      />
      <button
        onClick={() => {
          if (todoValue.trim() === "") return;
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}
