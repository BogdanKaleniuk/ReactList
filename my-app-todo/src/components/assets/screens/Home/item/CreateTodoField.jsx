import React, { useState } from "react";

const CreateTodoField = ({ setTodos }) => {
  const [title, setTitle] = useState("");
  const addTodo = (title) => {
    setTodos((prev) => [
      {
        _id: new Date(),
        title,
        isCompleted: false,
      },
      ...prev,
    ]);
    setTitle("");
  };
  return (
    <div className="flex item-center justify-between mb-4 rounded-2xl bg-gray-800 p-5 w-full">
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        onKeyDown={(e) => e.key === "Enter" && addTodo(title)}
        className="bg-transparent w-full border-none outline-none "
        placeholder="Enter Todo"
      />
      <button className="rounded-lg" onClick={() => addTodo(title)}>
        Add
      </button>
    </div>
  );
};

export default CreateTodoField;
