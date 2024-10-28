import React, { useState } from "react";

const Login = ({ handelLogin }) => {
  // console.log(handelLogin);
  // console.log(props)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handelLogin(email,password);
     console.log("Email is : ", email);
    console.log("password is : ", password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border-2 border-emerald-600 rounded-full py-4 px-5 text-xl  outline-none bg-transparent placeholder:text-gray-800"
            type="email"
            placeholder="Enter your email id"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border-2 border-emerald-600 rounded-full py-4 px-5 text-xl outline-none bg-transparent placeholder:text-gray-800 mt-3"
            type="password"
            placeholder="Enter password"
          />
          <button className=" border-none  bg-emerald-600 rounded-full py-4 px-5 text-xl text-white outline-none  placeholder:text-white mt-5 active:scale-90">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
