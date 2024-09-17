import React from "react";
import { useSelector } from "react-redux";
import Todo from "../components/Todo";
function Home() {
  const todos = useSelector((store) => store);

  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default Home;
