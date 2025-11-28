"use client";

import { toggleTodo, deleteTodo } from "@/app/actions";

export default function TodoList({ todos }) {
  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between bg-gray-100 p-3 rounded shadow"
        >
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={todo.completed}
              // Call server action directly
              onChange={() => toggleTodo(todo.id, todo.completed)}
              className="w-5 h-5 cursor-pointer"
            />
            <span className={todo.completed ? "line-through text-gray-500" : ""}>
              {todo.text}
            </span>
          </div>

          <button
            onClick={() => deleteTodo(todo.id)}
            className="text-red-500 hover:text-red-700 font-bold"
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}