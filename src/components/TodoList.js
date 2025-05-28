import React from 'react';

function TodoList({ todos, handleComplete }) {
  return (
    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <span>{todo.text}</span>
          {!todo.completed && (
            <button onClick={() => handleComplete(todo.id)}>Complete</button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
