import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.svg';
const Login = () => {
  return (
    <div className=" bg-netflix-bg w-full h-screen bg-center opacity-80">
      <div className="flex w-full h-28  px-10 py-10">
        <img src={Logo} alt="" className=" h-full" />
      </div>

      <div className="flex flex-col  mx-auto my-auto bg-black bg-opacity-90 sm:w-full  lg:w-1/4 sm:flex-1 h-4/6 sm:p-12 p-1 ">
        <span className="text-white   text-4xl">Sign In</span>

        <form type="submit">
          <div>
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full mt-10 h-16 rounded text-2xl"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full mt-10 h-16 rounded text-2xl"
            />
          </div>

          <div>
            <button className="text-2xl bg-red-800 sm:h-16 sm:w-full mt-10 text-white focus:outline-none">
              Login
            </button>
          </div>

          <div className="flex justify-center mt-10">
            <Link to="/signup" className="text-white text-2xl">
              Sign Up Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
