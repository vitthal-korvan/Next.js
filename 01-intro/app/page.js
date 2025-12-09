"use client"
import { useState } from "react";

const page = () => {
  const [name, setName] = useState("Vitthal Korvan")
  return (
    <div className="h-screen w-full bg-zinc-800 text-white">
      <h1 className="text-4xl tracking-tighter">Vitthal Korvan - Code Subtle</h1>
      <button className="px-6 py-3 bg-blue-700 rounded-4xl cursor-pointer">Hello! {name}</button>
    </div>
  );
}

export default page