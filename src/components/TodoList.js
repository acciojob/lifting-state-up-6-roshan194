import React from "react";

function TodoList({ todos, handleComplete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ marginBottom: 8 }}>
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              marginRight: 10,
            }}
          >
            {todo.text}
          </span>
          {!todo.completed && (
            <button onClick={() => handleComplete(todo.id)}>Complete</button>
          )}
          {todo.completed && <span style={{ color: "green" }}>✓ Completed</span>}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;