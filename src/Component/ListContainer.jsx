import React from "react";

function ListContainer({ todos, setTodos }) {
  function handleDeleteTodo(id) {
    const Todos = [...todos];
    Todos.splice(id, 1);
    setTodos(Todos);
  }

  function titleCase(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  console.log(todos);
  return (
    <ul className="text-white w-full mt-5 flex flex-col gap-5 border-4 p-5">
      {todos.length === 0 ? "No Tasks" : null}
      {todos.map((task, index) => {
        return (
          <li key={index} className="flex items-center justify-between gap-4">
            <h3 className="flex-1 border-2 px-4 py-2 font-semibold">
              {titleCase(task)}
            </h3>
            <button
              className="bg-red-500 rounded-lg shadow-lg px-4 py-2"
              onClick={() => handleDeleteTodo(index)}
            >
              Delete Todo
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ListContainer;
