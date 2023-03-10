import React from "react";
import Check from "./Check";
import cn from "classnames";
import { BsTrash } from "react-icons/bs";
import { useState } from "react";

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
  const [hour, setTime] = useState(0);

  const time = new Date().toLocaleTimeString();

  return (
    <div className="flex item-center justify-between mb-4 rounded-2xl bg-gray-800 p-5 w-full">
      <button className="flex item-center" onClick={() => changeTodo(todo._id)}>
        <Check isCompleted={todo.isCompleted} />
        <div>
          <span
            className={cn({
              "line-through": todo.isCompleted,
            })}
          >
            {todo.title}
            <div>{time}</div>
          </span>
        </div>
      </button>
      <button onClick={() => removeTodo(todo._id)}>
        <BsTrash
          size={22}
          className="text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300 "
        />
      </button>
    </div>
  );
};

export default TodoItem;
