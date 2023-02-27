import React, { useState } from "react";

const start = Date.now();

const TodoList = ({ todo, setTodo }) => {
  const [time, setTime] = useState(new Date().toISOString());
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");
  setTimeout(() => {
    const millis = Date.now() - start;

    console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
    // Expected output: "seconds elapsed = 2"
  }, 2000);

  const deleteTodo = (id) => {
    const newTodo = [...todo].filter((item) => item.id !== id);
    setTodo(newTodo);
  };

  const saveTodo = (id) => {
    const newTodo = [...todo].map((item) => {
      if (item.id === id) {
        item.title = value;
      }
      return item;
    });
    setTodo(newTodo);
    setEdit(null);
  };

  const editTodo = (id, title) => {
    setEdit(id);
    setValue(title);
  };

  const statusTodo = (id) => {
    const newTodo = [...todo].filter((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodo(newTodo);
  };

  const timeTodo = () => {};

  return (
    <div className="flex item-center justify-between mb-4 rounded-2xl bg-gray-800 p-5 w-full">
      {todo.map((item) => (
        <div key={item.id}>
          {edit === item.id ? (
            <div className="flex item-center">
              <input value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
          ) : (
            <div>{item.title}</div>
          )}

          {edit === item.id ? (
            <div>
              <button className="rounded-lg" onClick={() => saveTodo(item.id)}>
                Save
              </button>
            </div>
          ) : (
            <div>
              <button onClick={() => deleteTodo(item.id)}>Delete</button>
              <button onClick={() => editTodo(item.id, item.title)}>
                Edit
              </button>

              <button onClick={() => statusTodo(item.id)}>Close / Open</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
