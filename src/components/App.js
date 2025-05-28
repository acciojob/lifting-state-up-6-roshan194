
import React, {useState} from "react";
import TodoList from "./TodoList";
import './../styles/App.css';

const App = () => {

  const [todos, setTodos] = useState([
    {id: 1, text: 'Learn React', completed: false},
    {id: 2, text: 'Build a React app', completed: false},
    {id: 13, text: 'Deploy the React app', completed: false},
  ]);


  const handleComplete = (id) => {
    const updatedtodos = todos.map(todo => 
      todo.id === id ? {...todo, completed: true} : todo
    );
    setTodos(updatedtodos);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Todo List</h1>
        <TodoList todos = {todos} handleComplete = {handleComplete} />
    </div>
  )
}

export default App
