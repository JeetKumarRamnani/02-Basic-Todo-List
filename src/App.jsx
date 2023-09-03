import React, { useState } from "react";
import AddTodo from "./Component/AddTodo";
import ListContainer from "./Component/ListContainer";

function App() {
  const [todos, setTodos] = useState(["hello"]);
  return (
    <div className="Main-Container flex flex-col items-center justify-center ">
      <h1 className="font-semibold text-4xl mb-10">React Todo Application</h1>
      <AddTodo setTodos={setTodos} />
      <ListContainer todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
