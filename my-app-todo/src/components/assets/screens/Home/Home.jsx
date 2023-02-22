import React from "react";
import TodoItem from "./item/TodoItem";
import { useState } from "react";
import CreateTodoField from "./item/CreateTodoField";

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
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t._id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  const removeTodo = (id) => {
    setTodos([...todos].filter((t) => t._id !== id));
  };

  const addTodo = (title) => {
    setTodos([
      {
        _id: new Date(),
        title,
        isCompleted: false,
      },
      ...todos,
    ]);
  };

  return (
    <div className=" text-white w-4/5 mx-auto">
      <h1 className="text-2x1 font-bold text-center mb-8">Todo for junior</h1>
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <CreateTodoField addTodo={addTodo} />
    </div>
  );
};

export default Home;
