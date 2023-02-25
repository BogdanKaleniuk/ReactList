import React from "react";
import TodoItem from "./item/TodoItem";
import { useState } from "react";
import CreateTodoField from "./item/CreateTodoField";
import { useEffect } from "react";

const data = [
  {
    _id: "w1",
    title: "Finish the essay collaboration",
    isCompleted: false,
    time: new Date().toLocaleTimeString(),
  },
  {
    _id: "w2",
    title: "Finish the essay collaboration2",
    isCompleted: false,
  },
  {
    _id: "w3",
    title: "Finish the essay collaboration3",
    isCompleted: false,
  },
];

const Home = () => {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(window.localStorage.getItem("todos") || []);
  });
  window.localStorage.setItem("todos", JSON.stringify(todos));
  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t._id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  const removeTodo = (id) => {
    setTodos([...todos].filter((t) => t._id !== id));
  };

  const updateTodo = (todoId, newValue) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const start = Date.now();

  console.log("starting timer...");
  setTimeout(() => {
    const millis = Date.now() - start;

    console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
    // Expected output: "seconds elapsed = 2"
  }, 2000);

  console.log("start", Date.now());
  return (
    <div className=" text-white w-4/5 mx-auto">
      <h1 className="text-2x1 font-bold text-center mb-8">Записник</h1>
      <h2 className="text-center mb-8">У тебе {todos.length} задач</h2>
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      ))}
      <CreateTodoField setTodos={setTodos} />
    </div>
  );
};

export default Home;
