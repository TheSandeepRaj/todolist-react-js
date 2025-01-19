import React from "react";

export default function ToDoCard({
  todo,
  todoIndex,
  handleDeleteTodo,
  toggleEditTodo,
  handleEditChange,
}) {
  return (
    <li className="todoItem">
      {todo.isEditing ? (
        <input
          type="text"
          value={todo.text}
          onChange={(e) => handleEditChange(todoIndex, e.target.value)}
        />
      ) : (
        <p>{todo.text}</p>
      )}

      <button onClick={() => toggleEditTodo(todoIndex)}>
        {todo.isEditing ? (
          <i className="fa-solid fa-floppy-disk"></i>
        ) : (
          <i className="fa-solid fa-pen-to-square"></i>
        )}
      </button>

      <button onClick={() => handleDeleteTodo(todoIndex)}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </li>
  );
}
