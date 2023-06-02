import { useState } from "react";
import { createTodo } from "../utils/helper";
import { useQueryClient } from "@tanstack/react-query";

function AddTodos() {
  const [input, setInput] = useState("");
  const queryClient = useQueryClient();
  return (
    <form
      className="w-full"
      onSubmit={(e) => {
        e.preventDefault();
        if (!input) {
          return alert("Please write Todo name");
        }
        createTodo(input);
        setInput("");
        queryClient.invalidateQueries("todos");
      }}
    >
      <input
        type="text"
        className="w-full py-3 px-5 shadow-sm rounded-md border border-slate-300 bg-transparent placeholder:text-lg placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
        placeholder="Add Todos..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}

export default AddTodos;
