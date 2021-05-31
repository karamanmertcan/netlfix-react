import React from 'react';
import Logo from '../../images/logo.svg';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between ">
      <div>
        <img src={Logo} alt="Logo" className="h-40 w-40 ml-8" />
      </div>
      <div className="flex justify-center bg-red-600 w-24 h-14 mr-4 rounded-md z-10">
        <button className="text-2xl text-white focus:outline-none">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
