import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddTodo = ({ todo, setTodo }) => {
  const [value, setValue] = useState("");

  const saveTodo = () => {
    setTodo([
      ...todo,
      {
        id: uuidv4(),
        title: value,
        status: true,
        date: new Date().toLocaleDateString(),
      },
    ]);

    setValue("");
  };

  return (
    <div>
      <input
        placeholder="Enter task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={saveTodo}>Add</button>
    </div>
  );
};

export default AddTodo;
