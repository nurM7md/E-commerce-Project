import React from 'react'

const Register = ({openLogin}) => {
  return (
    <div>
      <h2 className="pb-3 text-3xl font-bold text-slate-900">Sign Up</h2>
      <form>
        <div className="flex flex-col">
          <label htmlFor="" className="text-lg text-slate-800">
            Name
          </label>
          <input
            type="email"
            placeholder="Enter Name"
            className="py-1 pl-2 pr-6 border-2 border-gray-300 rounded-lg"
          />
          </div>
        <div className="flex flex-col py-3">
          <label htmlFor="" className="text-lg text-slate-800">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            className="py-1 pl-2 pr-6 border-2 border-gray-300 rounded-lg"
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="" className="text-lg text-slate-800">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            className="py-1 pl-2 pr-3 border-2 border-gray-300 rounded-lg"
          />
        </div>
        
        <div className="my-6">
          <button className="py-2 m-auto text-lg text-white bg-red-800 rounded-lg px-44">
            SignUp
          </button>
        </div>
      </form>
      <div className="flex flex-row px-16 py-2 m-auto">
        <span className="text-lg text-slate-800">Already have an Account ? </span>
        <button className="text-lg text-red-700 "
        onClick={openLogin}>Login</button>
      </div>
    </div>
  )
}

export default Register