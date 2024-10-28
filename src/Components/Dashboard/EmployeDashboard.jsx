import React from "react";
import Header from "../Others/Header";
import TaskListNumber from "../Others/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeDashboard = (props) => {
 //console.log(data)
  return (

    <div className="p-10 bg[#1C1C1C] h-screen ">
      {/* <h1>{data.id}</h1> */}
      <Header changeUser={props.changeUser} data={props.data}/>
      <TaskListNumber data={props.data} />
      <TaskList data={props.data}/>
    </div>
  );
};

export default EmployeDashboard;
