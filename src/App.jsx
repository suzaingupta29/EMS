import React, { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
import EmployeDashboard from "./Components/Dashboard/EmployeDashboard";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";
//import { getLocalStorage, setLocalStorage } from "./utils/localStroage";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  // useEffect(() => {
  //   setLocalStorage();
  //   getLocalStorage();
  // }, []);

  const authdata = useContext(AuthContext);
  console.log(authdata);
  console.log(authdata?.employees);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handelLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      console.log("admin");
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authdata) {
      console.log("this is user");
      const employee = authdata?.employees.find(
        (e) => email == e.email && e.password == password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handelLogin={handelLogin} /> : ""}
      {user === "admin" ? (
        <AdminDashboard changeUser={setUser}/>
      ) : user === "employee" ? (
        <EmployeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
      {/* <EmployeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  );
};

export default App;
