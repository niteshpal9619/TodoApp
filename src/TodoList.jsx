import React from "react";

function TodoList({ todos }) {
  return (
    <ul className="list-group mb-4">
      {todos.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.task}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
