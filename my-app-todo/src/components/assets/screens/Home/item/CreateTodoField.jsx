import React, { useState } from "react";

const CreateTodoField = (addTodo) => {
  const [title, setTitle] = useState("");
  return (
    <div className="flex item-center justify-between mb-4 rounded-2xl bg-gray-800 p-5 w-full">
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        onKeyDownCapture={(e) => e.key === "Enter" && addTodo(title)}
        className="bg-transparent w-full border-none outline-none "
        placeholder="Enter Todo"
      />
      <button className="border-spacing-1" onClick={() => addTodo(title)}>
        Add
      </button>
    </div>
  );
};

export default CreateTodoField;
