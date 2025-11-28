"use client";

import { deleteTodo, toggleTodo } from "@/app/actions";

export default function TodoList({ todos }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="todo-item"
        >
          <div className="todo-content">
            <input
              type="checkbox"
              checked={todo.completed}
              // Call server action directly
              onChange={() => toggleTodo(todo.id, todo.completed)}
              className="todo-checkbox"
            />
            <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
              {todo.text}
            </span>
          </div>

          <button
            onClick={() => deleteTodo(todo.id)}
            className="delete-button"
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}