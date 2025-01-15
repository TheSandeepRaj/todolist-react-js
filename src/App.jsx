import { useState } from "react";
import ToDoInput from "./components/ToDoInput.jsx";
import ToDoList from "./components/ToDoList.jsx";
import ToDoCard from "./components/ToDoCard.jsx";

function App() {
  let todos = ["Buy groceries", "Walk the dog", "Read a book"];
  return (
    <div>
      <h1>ToDo List</h1>
      <ToDoInput />
      <ToDoList todos={todos} />
    </div>
  );
}

export default App;
