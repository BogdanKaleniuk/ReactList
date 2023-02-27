import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todo, setTodo] = useState(() => {
    return JSON.parse(
      window.localStorage.getItem("todo") || [
        {
          id: 1,
          title: "first todo",
          status: true,
          date: new Date().toISOString(),
        },
      ]
    );
  });
  window.localStorage.setItem("todo", JSON.stringify(todo));

  return (
    <div className=" text-black w-4/5 mx-auto">
      <Header className="text-2x1 font-bold text-center mb-8" />
      <AddTodo className="text-center mb-8" todo={todo} setTodo={setTodo} />
      <TodoList className="text-center mb-8" todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
