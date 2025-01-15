import React from "react";
import TodoList from "./ToDoList";

export default function ToDoCard(props) {
  const { children } = props;
  return (
    <li className="todoItem">
      {children}

      <i className="fa-solid fa-pen-to-square"></i>
      <i className="fa-solid fa-trash"></i>
    </li>
  );
}
