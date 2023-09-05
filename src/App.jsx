import React, { useEffect, useState } from "react";
import AddTodo from "./Component/AddTodo";
import ListContainer from "./Component/ListContainer";

function App() {
  // useEffect(() => {
  //   fetch("http://localhost:3000/")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);
  const [todos, setTodos] = useState(["Jeet"]);
  return (
    <div className="Main-Container flex flex-col items-center justify-center ">
      <h1 className="font-semibold text-4xl mb-10">React Todo Application</h1>
      <AddTodo todos={todos} setTodos={setTodos} />
      <h2 className="text-2xl md:text-4xl font-bold mt-5 text-right">Your All Todos</h2>
      <ListContainer todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
