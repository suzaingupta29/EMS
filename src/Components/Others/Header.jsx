import React, { useState } from "react";
import { setLocalStorage } from "../../utils/localStroage";
const Header = (props) => {
  // console.log(data)
  // const [username, setUsername] = useState("");
  // if (!data) {
  //   setUsername("Admin");
  // } else {
  //   setUsername(data.firstName);
  // }
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
    //window.location.reload();
  };
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium ">
        Hello <br />
        <span className="text-3xl font-semibold">username</span>{" "}
      </h1>
      <button
        onClick={logOutUser}
        className="border-none  bg-red-500 rounded-full py-4 px-5 text-xl text-white outline-none  placeholder:text-white mt-5 active:scale-90"
      >
        Log out
      </button>
    </div>
  );
};

export default Header;
