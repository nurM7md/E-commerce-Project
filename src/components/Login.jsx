import React from "react";

const Login = ({openSignUp}) => {
  return (
    <div>
      <h2 className="pb-3 text-3xl font-bold text-slate-900">Login</h2>
      <form>
        <div className="flex flex-col">
          <label htmlFor="" className="text-lg text-slate-800">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            className="py-1 pl-2 pr-6 border-2 border-gray-300 rounded-lg"
          />
        </div>
        <div className="flex flex-col py-2">
          <label htmlFor="" className="text-lg text-slate-800">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            className="py-1 pl-2 pr-3 border-2 border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="" className="flex flex-row justify-between py-2">
            <div>
              <input type="checkbox" />
              <span className="text-lg text-slate-800">Remember Me</span>
            </div>
            <a href="" className="flex text-lg text-red-700">
              Forget password !
            </a>
          </label>
        </div>
        <div className="my-2">
          <button className="py-2 m-auto text-lg text-white bg-red-800 rounded-lg px-44">
            Login
          </button>
        </div>
      </form>
      <div className="flex flex-row px-16 py-3 m-auto">
        <span className="text-lg text-slate-800">Don't have an Account ? </span>
        <button className="text-lg text-red-700 "
        onClick={openSignUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default Login;
