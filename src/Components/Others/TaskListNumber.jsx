import React from "react";

const TaskListNumber = ({ data }) => {
  return (
    <div className="flex justify-between gap-5  screen mt-10">
      <div className=" bg-blue-400 w-[45%] rounded px-9 py-6 rounded-2xl">
        <h2 className="text-3xl font-semibold">{data.taskCounts.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>

      <div className=" bg-green-400 w-[45%] rounded px-9 py-6 rounded-2xl">
        <h2 className="text-3xl font-semibold">{data.taskCounts.completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>

      <div className=" bg-yellow-400 w-[45%] rounded px-9 py-6 rounded-2xl">
        <h2 className="text-3xl font-semibold">{data.taskCounts.active}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>

        <div className=" bg-red-400 w-[45%] rounded px-9 py-6 rounded-2xl">
          <h2 className="text-3xl font-semibold">{data.taskCounts.failed}</h2>
          <h3 className="text-xl font-medium">Failed Task</h3>
        </div>
    </div>
  );
};

export default TaskListNumber;
