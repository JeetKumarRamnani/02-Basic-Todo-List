import React from "react";

function AddTodo({ setTodos }) {
  const [formValue, setFormValue] = React.useState("");


  //Method To Handle ADD Functionality
  function addTodoHandler(e) {
    e.preventDefault();
    if (formValue) {
      setTodos((prev) => [...prev, formValue]);
      setFormValue("");
    } else {
      alert("Please Enter Task");
    }
  }
  //Method To Handle Delete All Todos Functionality
    function handleDeleteAllTodos(){
      setTodos([]);
    }

  return (
    <div className="Add-Todo w-full">
      <form className="flex flex-col md:flex-row gap-4 text-black" onSubmit={addTodoHandler}>
        <input
          type="text"
          className="p-3 rounded-lg text-lg flex-1 md:w-[400px]"
          onChange={(e) => setFormValue(e.target.value)}
          value={formValue}
          placeholder="Add Task Here..."
        />
        <button className="p-3 rounded-lg  bg-emerald-500">Add Todo</button>
        <button className="p-3 rounded-lg  bg-red-500" type="button" onClick={handleDeleteAllTodos}>Delete All Todos</button>
      </form>
    </div>
  );
}

export default AddTodo;
