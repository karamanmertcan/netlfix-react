import React, { useContext, useEffect, useState } from 'react';
import BrowseNav from '../components/BrowseNavbar/BrowseNav';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import MovieContext from '../context/movieContext';
import MovieItem from '../components/Movie/MovieItem';
import { ChevronLeft, ChevronRight } from '../icons/Icons';
import ActionMovie from '../components/MovieRow/ActionMovie';
import ComedyMovie from '../components/MovieRow/ComedyMovie';
import DocsMovie from '../components/MovieRow/DocsMovie';
import Footer from '../components/Footer/Footer';

const Browse = () => {
  const movieContext = useContext(MovieContext);
  const {
    getMovies,
    movies,
    getActionMovies,
    actionMovies,
    getComedyMovies,
    comedyMovies,
    getDocs,
    docs,
  } = movieContext;

  const [slideNumber, setSlideNumber] = useState(9);
  const [firstSlideNumber, setFirstSlideNumber] = useState(0);

  const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

  useEffect(() => {
    getMovies();
    getActionMovies();
    getComedyMovies();
    getDocs();
  }, []);

  const nextSlide = (e) => {
    e.preventDefault();

    setFirstSlideNumber(9);
    setSlideNumber(movies.length - 1);
  };

  const prevSlide = (e) => {
    e.preventDefault();
    setFirstSlideNumber(0);
    setSlideNumber(9);
  };

  console.log(movies);
  console.log(actionMovies);
  console.log(docs);

  if (movies.length < 1) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className=" min-h-screen h-auto  max-w-full bg-browsebg">
      <BrowseNav />
      <Jumbotron movies={movies} />
      <div className="min-h-full h-auto bg-black p-10 space-y-10 ">
        <div className="pt-10">
          <span className="text-white text-4xl font-bold ml-2  ">
            Trending Now
          </span>
        </div>
        <div className="flex  mx-auto h-72 w-full transition duration-500 ease-in-out">
          <button
            onClick={(e) => prevSlide(e)}
            className="flex flex-start items-center text-white w-48 all items-center focus:outline-none text-white bg-gray-800 transform scale-100 hover:scale-110 transition duration-500 ease-in-out"
          >
            <ChevronLeft />
          </button>
          {movies.slice(firstSlideNumber, slideNumber).map((movie) => {
            const { poster_path, backdrop_path } = movie;
            return (
              <MovieItem
                posterPath={poster_path}
                backdropPath={backdrop_path}
                imgPath={IMG_PATH}
              />
            );
          })}
          <button
            onClick={(e) => nextSlide(e)}
            className="flex flex-end w-48 all items-center focus:outline-none text-white bg-gray-800 transform scale-100 hover:scale-110 transition duration-500 ease-in-out"
          >
            <ChevronRight />
          </button>
        </div>

        <ActionMovie actionMovies={actionMovies} imgPath={IMG_PATH} />
        <ComedyMovie comedyMovies={comedyMovies} imgPath={IMG_PATH} />
        <DocsMovie docs={docs} imgPath={IMG_PATH} />
      </div>
      <Footer />
    </div>
  );
};

export default Browse;
