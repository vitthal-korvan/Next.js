"use server";

import connectDB from "@/lib/db";
import Todo from "@/models/Todo";
import { revalidatePath } from "next/cache";

// 1. Create a Todo
export async function createTodo(formData) {
  await connectDB();
  const text = formData.get("text");

  if (!text) return;

  await Todo.create({ text });
  revalidatePath("/"); // Refreshes the data on the page
}

// 2. Toggle Completion
export async function toggleTodo(id, completed) {
  await connectDB();
  await Todo.findByIdAndUpdate(id, { completed: !completed });
  revalidatePath("/");
}

// 3. Delete a Todo
export async function deleteTodo(id) {
  await connectDB();
  await Todo.findByIdAndDelete(id);
  revalidatePath("/");
}