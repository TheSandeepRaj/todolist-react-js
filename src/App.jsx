import { useState, useEffect } from "react";
import ToDoInput from "./components/ToDoInput.jsx";
import ToDoList from "./components/ToDoList.jsx";

function App() {
  const sampleTodos = [
    { text: "Buy groceries", isEditing: false },
    { text: "Walk the dog", isEditing: false },
    { text: "Read a book", isEditing: false },
  ];

  const [todos, setTodos] = useState(sampleTodos);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      try {
        const parsed = JSON.parse(storedTodos);
        if (Array.isArray(parsed)) {
          setTodos(parsed);
        }
      } catch (err) {
        console.error("Failed to parse local todos:", err);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleAddTodos(newTodo) {
    if (newTodo.trim() === "") return;
    const newTodoList = [...todos, { text: newTodo, isEditing: false }];
    setTodos(newTodoList);
  }

  function handleDeleteTodo(todoIndex) {
    const newTodoList = todos.filter((_, index) => index !== todoIndex);
    setTodos(newTodoList);
  }

  function toggleEditTodo(index) {
    const newTodos = [...todos];
    newTodos[index].isEditing = !newTodos[index].isEditing;
    setTodos(newTodos);
  }

  function handleEditChange(index, newText) {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    setTodos(newTodos);
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>ToDo List</h1>
      <ToDoInput handleAddTodos={handleAddTodos} />
      <ToDoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        toggleEditTodo={toggleEditTodo}
        handleEditChange={handleEditChange}
      />
    </div>
  );
}

export default App;
