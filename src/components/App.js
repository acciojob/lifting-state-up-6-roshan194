import React, { useState } from "react";
import TodoList from "./TodoList";

const initialTodos = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Read about Lifting State Up", completed: false },
  { id: 3, text: "Build Todo App", completed: false },
];

export default function App() {
  const [todos, setTodos] = useState(initialTodos);

  const handleComplete = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
}