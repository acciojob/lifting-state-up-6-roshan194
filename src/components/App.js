// App.js
import React, { useState } from 'react';
import TodoList from './TodoList'; // Assuming TodoList.js is in the same directory

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a React app', completed: false },
    { id: 3, text: 'Deploy the React app', completed: false },
  ]);

  const handleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <h2>Child Component</h2>
      <TodoList todos={todos} onComplete={handleComplete} />
    </div>
  );
}

export default App;