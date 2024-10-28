import React from "react";
import Header from "../Others/Header";
import CReateTask from "../Others/CReateTask";
import AllTask from "../Others/AllTask";
const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-10">
      <Header changeUser={props.changeUser}/>
      <CReateTask/>
      <AllTask/>
          </div>
  );
};

export default AdminDashboard;
