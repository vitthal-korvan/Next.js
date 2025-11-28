import connectDB from "@/lib/db";
import Todo from "@/models/Todo";
import { createTodo } from "@/app/actions";
import TodoList from "@/components/TodoList";

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
    <main className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">My Todo App</h1>

      {/* 2. Add Form */}
      <form action={createTodo} className="flex gap-2 mb-6">
        <input
          type="text"
          name="text"
          placeholder="Add a new task..."
          className="flex-1 border p-2 rounded text-black"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </form>

      {/* 3. List Component */}
      <TodoList todos={plainTodos} />
    </main>
  );
}