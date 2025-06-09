// TodoList.js
import React from 'react';

function TodoList({ todos, onComplete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ textDecoration: todo.completed }}>
          {todo.text}
          {!todo.completed && (
            <button onClick={() => onComplete(todo.id)}>
              Complete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;