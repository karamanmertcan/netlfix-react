import React, { useState } from 'react';
import MovieItem from '../Movie/MovieItem';
import { ChevronLeft, ChevronRight } from '../../icons/Icons';

const ComedyMovie = ({ comedyMovies, imgPath, handleClick }) => {
  const [actionNumber, setActionNumber] = useState(0);
  const [lastActionNumber, setLastActionNumber] = useState(9);
  const nextSlide = e => {
    e.preventDefault();

    setActionNumber(9);
    setLastActionNumber(comedyMovies.length - 1);
  };

  const prevSlide = e => {
    e.preventDefault();
    setActionNumber(0);
    setLastActionNumber(9);
  };
  return (
    <>
      <div className='pt-10'>
        <span className='text-white text-4xl font-bold ml-2  '>Comedy</span>
      </div>
      <div className='flex  mx-auto h-72 w-full transition duration-500 ease-in-out'>
        <button
          onClick={e => prevSlide(e)}
          className='flex flex-start w-48 items-center focus:outline-none text-white bg-gray-800 transform scale-100 hover:scale-110 transition duration-500 ease-in-out'
        >
          <ChevronLeft />
        </button>
        {comedyMovies.slice(actionNumber, lastActionNumber).map(movie => {
          const { poster_path, id } = movie;
          return (
            <MovieItem
              id={id}
              handleClick={handleClick}
              key={movie.id}
              posterPath={poster_path}
              imgPath={imgPath}
            />
          );
        })}
        <button
          onClick={e => nextSlide(e)}
          className='flex flex-end w-48 action items-center focus:outline-none text-white bg-gray-800 transform scale-100 hover:scale-110 transition duration-500 ease-in-out'
        >
          <ChevronRight />
        </button>
      </div>
    </>
  );
};

export default ComedyMovie;
