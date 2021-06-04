import React, { useState } from 'react';
import MovieItem from '../Movie/MovieItem';
import { ChevronLeft, ChevronRight } from '../../icons/Icons';

const DocsMovie = ({ docs, imgPath }) => {
  const [actionNumber, setActionNumber] = useState(0);
  const [lastActionNumber, setLastActionNumber] = useState(9);
  const nextSlide = (e) => {
    e.preventDefault();

    setActionNumber(9);
    setLastActionNumber(docs.length - 1);
  };

  const prevSlide = (e) => {
    e.preventDefault();
    setActionNumber(0);
    setLastActionNumber(9);
  };
  return (
    <>
      <div className="pt-10">
        <span className="text-white text-4xl font-bold ml-2  ">
          Documentaries
        </span>
      </div>
      <div className="flex  mx-auto h-72 w-full transition duration-500 ease-in-out space-x-1">
        <button
          onClick={(e) => prevSlide(e)}
          className="flex flex-start action items-center text-white w-48 items-center focus:outline-none text-white bg-gray-800 transform scale-100 hover:scale-110 transition duration-500 ease-in-out"
        >
          <ChevronLeft />
        </button>
        {docs.slice(actionNumber, lastActionNumber).map((movie) => {
          const { poster_path } = movie;
          return <MovieItem posterPath={poster_path} imgPath={imgPath} />;
        })}
        <button
          onClick={(e) => nextSlide(e)}
          className="flex flex-end w-48 action items-center focus:outline-none text-white bg-gray-800 transform scale-100 hover:scale-110 transition duration-500 ease-in-out"
        >
          <ChevronRight />
        </button>
      </div>
    </>
  );
};

export default DocsMovie;
