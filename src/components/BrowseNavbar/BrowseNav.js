import React from 'react';
import { Bell, Gift, Search } from '../../icons/Icons';
import Logo from '../../images/logo.svg';
const BrowseNav = () => {
  return (
    <nav className="flex justify-between p-12 h-8">
      <div className="flex items-center ">
        <img src={Logo} alt="" className="h-12" />
        <span className="text-white text-2xl ml-5 font-bold">Home</span>
        <span className="text-white text-2xl ml-5 font-bold">Series</span>
        <span className="text-white text-2xl ml-5 font-bold">Films</span>
        <span className="text-white text-2xl ml-5 font-bold">
          New & Popular
        </span>
        <span className="text-white text-2xl ml-5 font-bold">My List</span>
      </div>
      <div className="flex items-center ">
        <div className="mr-5">
          <Search />
        </div>
        <span className="text-white text-2xl mr-8 font-bold">Children</span>
        <div className="mr-5">
          <Gift />
        </div>
        <div>
          <Bell />
        </div>
      </div>
    </nav>
  );
};

export default BrowseNav;
