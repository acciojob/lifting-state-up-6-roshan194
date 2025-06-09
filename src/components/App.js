import React, { useState } from 'react';
import TodoList from './TodoList';

const App = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build a Todo App', completed: false },
        { id: 3, text: 'Build React Projects', completed: false },
        // Add more todos as needed
    ]);

    const handleComplete = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: true } : todo
        ));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <TodoList todos={todos} handleComplete={handleComplete} />
        </div>
    );
};

export default App;