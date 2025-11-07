"use client"
import { useState } from "react";

const page = () => {
  const [name, setName] = useState("Vitthal")
  return (
    <div>
      <h1>Vitthal Korvan - Code Subtle</h1>
      <button>Hello! {name}</button>
    </div>
  );
}

export default page