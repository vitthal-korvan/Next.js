import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Prevent model overwrite error during hot reloading
const Todo = mongoose.models.Todo || mongoose.model("Todo", TodoSchema);

export default Todo;