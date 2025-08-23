import React from "react";

export default function TodoList({ todos, handleComplete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              marginRight: 8,
            }}
          >
            {todo.text}
          </span>
          {!todo.completed && (
            <button onClick={() => handleComplete(todo.id)}>
              complete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}