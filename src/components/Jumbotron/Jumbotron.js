import React, { useEffect, useContext } from 'react';
import MovieContext from '../../context/movieContext';
import { Info, Play } from '../../icons/Icons';

const Jumbotron = ({ movies }) => {
  return (
    <div className="h-screen grid grid-rows-4 grid-cols-8">
      <div className="flex justify-start items-center  h-full w-full col-start-2 col-end-4  row-start-2 row-end-3">
        <span className="text-white text-7xl font-bold">{movies[0].title}</span>
      </div>
      <div className="flex justify-center items-end  h-full w-full col-start-2 col-end-5 row-start-3 row-end-4">
        <span className="text-white text-xl font-extrabold">
          {movies[0].overview}
        </span>
      </div>
      <div className="flex justify-center mt-10  h-full w-full col-start-2 col-end-3 row-start-4 row-end-5">
        <button className="text-2xl bg-white h-14 w-32 rounded">
          <div className="flex items-center justify-center">
            <div>
              <Play />
            </div>
            <span className="flex text-2xl">Play</span>
          </div>
        </button>
        <button className="text-2xl bg-gray-800 h-14 w-48 ml-5 rounded bg-opacity-60  ">
          <div className="flex items-center justify-center">
            <div>
              <Info />
            </div>
            <span className="flex text-xl text-white">More Info</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Jumbotron;
