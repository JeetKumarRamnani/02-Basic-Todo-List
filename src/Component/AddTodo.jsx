import React from "react";

function AddTodo({ setTodos }) {
  const [formValue, setFormValue] = React.useState("");
  function addTodoHandler(e) {
    e.preventDefault();
    if (formValue) {
      setTodos((prev) => [...prev, formValue]);
      setFormValue("");
    } else {
      alert("Please Enter Task");
    }
  }
  return (
    <div className="Add-Todo w-full">
      <form className="flex gap-4 text-black" onSubmit={addTodoHandler}>
        <input
          type="text"
          className="p-3 rounded-lg text-lg flex-1"
          onChange={(e) => setFormValue(e.target.value)}
          value={formValue}
          placeholder="Add Task Here..."
        />
        <button className="p-3 rounded-lg  bg-emerald-500">Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodo;
