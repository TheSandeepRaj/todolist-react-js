//ToDoList.jsx

import ToDoCard from "./ToDoCard.jsx";

export default function TodoList({
  todos,
  handleDeleteTodo,
  toggleEditTodo,
  handleEditChange,
}) {
  return (
    <ul className="main">
      {todos.map((todo, index) => {
        return (
          <ToDoCard
            key={index}
            todo={todo}
            todoIndex={index}
            handleDeleteTodo={handleDeleteTodo}
            toggleEditTodo={toggleEditTodo}
            handleEditChange={handleEditChange}
          />
        );
      })}
    </ul>
  );
}
