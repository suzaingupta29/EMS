import React, { useState } from "react";
// import TaskList from "../TaskList/TaskList";
// import NewTask from "../TaskList/NewTask";

const CReateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const [newTask, setNewTask] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(taskTitle,taskDate,taskDescription,assignTo,category);

    setNewTask({
      taskTitle,
      taskDescription,
      taskDate,
      category,

      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });

    const data = JSON.parse(localStorage.getItem("employees"));
    console.log(data);
    data.forEach(function (elem) {
      if (assignTo == elem.firstName) {
        console.log(elem);
        elem.tasks.push(newTask);
        elem.taskCounts.newTask= elem.taskCounts.newTask + 1
      }
    });
    console.log(data)
    localStorage.setItem('employees',JSON.stringify(data))
    
    setTaskTitle("");
    setTaskDate("");
    setAssignTo("");
    setTaskDescription("");
    setCategory("");
  };
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex w-full flex-wrap   items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Make a UI design"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
            <input
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Employee Name"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="desgin, dev, etc "
            />
          </div>
        </div>

        <div className="w-1/2">
          <h3>Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            rows="10"
            cols="30"
          ></textarea>
          <button
            type="submit"
            className="bg-emerald-500 rpy-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full"
          >
            Create task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CReateTask;
