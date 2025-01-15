import React from "react";
import ToDoCard from "./ToDoCard.jsx";

export default function TodoList(props) {
  const { todos } = props;
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <ToDoCard key={todoIndex}>
            <p>{todo}</p>
          </ToDoCard>
        );
      })}
    </ul>
  );
}
