//App.js
import React, { useState } from 'react';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: 'Learn React', completed: false },
    { id: 2, task: 'Build a Todo App', completed: false },
    { id: 3, task: 'Deploy to Heroku', completed: false },
  ]);

  const handleComplete = (id) => {
    // Update the todos state by marking the specific todo as completed
    setTodos((prevTodos) => {
      return prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      );
    });
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
/*
import React, { useState } from 'react';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: 'Learn React', completed: false },
    { id: 2, task: 'Build a Todo App', completed: false },
    { id: 3, task: 'Deploy to Heroku', completed: false },
  ]);

  const handleComplete = (id) => {
    console.log(`handleComplete called with id: ${id}`); 

    setTodos((prevTodos) => {
      console.log('prevTodos:', prevTodos);
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      );
      console.log('updatedTodos:', updatedTodos); 
      return updatedTodos;
    });
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
*/