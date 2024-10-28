import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className=" flex items-center justify-start  gap-5 flex-nowrap overflow-x-auto h-[55%] py-5 w-full  mt-10 "
    >
      {/* <AcceptTask/>     
          <NewTask/>
         <CompleteTask/>
         <FailedTask/>
      */}
      {data.tasks.map((elem, idx) => {
        // console.log(elem)
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />;
        }
        if (elem.newTask) {
          return <NewTask key={idx} data={elem} />;
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />;
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />;
        }
      })}
    </div>
  );
};

export default TaskList;
