import React, { useState } from "react";
import { MdCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const Todo = () => {
  const [task, setTask] = useState("");
  const [work, setWork] = useState([]);

  const handleInputChange = (value) => {
    setTask(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!task) return;

    if (work.includes(task)) {
      setTask("");
      return;
    }

    setWork((prevWork) => [...prevWork, task]);
    setTask("");
    console.log("work State:", work);
  };

  return (
    <div className="min-h-screen flex bg-gray-400 items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">To-Do List</h2>
        </div>
        <section>
          <form onSubmit={handleFormSubmit}>
            <div className="flex flex-col mb-4">
              <input
                autoComplete="off"
                value={task}
                onChange={(event) => handleInputChange(event.target.value)}
                type="text"
                className="border p-2 rounded"
              />
              <button
                className="bg-amber-400 p-2 rounded-2xl mt-4"
                type="submit"
              >
                Add task
              </button>
            </div>
          </form>
        </section>
        <section className="unOrdList">
          <ul>
            {work.map((curWork, index) => {
              return (
                <li className="flex items-center justify-between mb-4 border border-black rounded-2xl p-2">
                  <span className="text-left pl-2">{curWork}</span>
                  <div className="flex space-x-3 pr-2">
<button className="border bg-amber-300 rounded-4xl cursor-pointer text-right">
                    <MdCheck size={"24px"} />
                  </button>
                  <button className="border bg-amber-300 rounded-4xl cursor-pointer text-right">
                    <MdDeleteForever size={"24px"} />
                  </button>
                  </div>
                  
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Todo;
