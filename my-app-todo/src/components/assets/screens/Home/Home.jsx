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

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t._id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
    window.localStorage.setItem("todos", JSON.stringify(todos));
  };

  const removeTodo = (id) => {
    setTodos([...todos].filter((t) => t._id !== id));
  };

  return (
    <div className=" text-white w-4/5 mx-auto">
      <h1 className="text-2x1 font-bold text-center mb-8">Записник</h1>
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <CreateTodoField setTodos={setTodos} />
    </div>
  );
};

export default Home;
