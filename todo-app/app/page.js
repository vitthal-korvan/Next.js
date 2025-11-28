import { createTodo } from "@/app/actions";
import TodoList from "@/components/TodoList";
import connectDB from "@/lib/db";
import Todo from "@/models/Todo";

export default async function Home() {
  // 1. Fetch data on the server
  await connectDB();
  const todos = await Todo.find().sort({ createdAt: -1 }).lean();

  // Convert MongoDB objects to simple JavaScript objects
  // This is needed because React can't serialize complex MongoDB IDs
  const plainTodos = todos.map((todo) => ({
    id: todo._id.toString(),
    text: todo.text,
    completed: todo.completed,
  }));

  return (
    <main className="main-container">
      <h1 className="app-title">My Todo App</h1>

      {/* 2. Add Form */}
      <form action={createTodo} className="todo-form">
        <input
          type="text"
          name="text"
          placeholder="Add a new task..."
          className="todo-input"
          required
        />
        <button
          type="submit"
          className="add-button"
        >
          Add
        </button>
      </form>

      {/* 3. List Component */}
      <TodoList todos={plainTodos} />
    </main>
  );
}