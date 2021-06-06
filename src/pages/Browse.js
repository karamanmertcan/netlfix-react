import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import BrowseNav from '../components/BrowseNavbar/BrowseNav';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import MovieContext from '../context/movieContext';
import { useAuth } from '../context/AuthContext';
import MovieItem from '../components/Movie/MovieItem';
import { ChevronLeft, ChevronRight } from '../icons/Icons';
import ActionMovie from '../components/MovieRow/ActionMovie';
import ComedyMovie from '../components/MovieRow/ComedyMovie';
import DocsMovie from '../components/MovieRow/DocsMovie';
import Footer from '../components/Footer/Footer';
import Youtube from 'react-youtube';

const Browse = () => {
  const movieContext = useContext(MovieContext);
  const { logout } = useAuth();
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
  const [modal, setModal] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState('');
  const [youtubeOpen, setYoutubeOpen] = useState(false);
  const history = useHistory();

  const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

  useEffect(() => {
    getMovies();
    getActionMovies();
    getComedyMovies();
    getDocs();
  }, [movies]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const nextSlide = e => {
    e.preventDefault();

    setFirstSlideNumber(9);
    setSlideNumber(movies.length - 1);
  };

  const prevSlide = e => {
    e.preventDefault();
    setFirstSlideNumber(0);
    setSlideNumber(9);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setModal(true);
  };

  const TRAILER_URL = `https://api.themoviedb.org/3`;

  const handleClick = async id => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      setYoutubeOpen(true);
      let res = await fetch(
        TRAILER_URL +
          `/movie/${id}/videos?api_key=b4d9150daa32ba3c4f9356f39daaa7bf`,
      );
      let data = await res.json();

      setTrailerUrl(data.results[0].key);
      setYoutubeOpen(true);
    }
  };

  const handleLogout = async e => {
    e.preventDefault();

    try {
      await logout();

      history.push('/login');
    } catch (error) {
      console.log(error.message);
    }
  };

  if (movies.length < 1) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className=' min-h-screen h-auto  max-w-full bg-browsebg transition-all duration-500 ease-in'>
      <BrowseNav
        modal={modal}
        setModal={setModal}
        handleSubmit={handleSubmit}
        handleLogout={handleLogout}
      />
      {modal && (
        <div className='flex flex-col h-48 w-28 bg-black absolute right-4 transition duration-500 ease-in-out border-2  border-gray-200'>
          <button
            onClick={handleLogout}
            className='text-white text-2xl border-b-2 border-gray-400'
          >
            Logout
          </button>
        </div>
      )}
      <Jumbotron movies={movies} />
      <div className='min-h-full h-auto bg-black p-10 space-y-10 '>
        <div className='pt-10'>
          <span className='text-white text-4xl font-bold ml-2  '>
            Trending Now
          </span>
        </div>
        <div className='flex  mx-auto h-72 w-full transition duration-500 ease-in-out'>
          <button
            onClick={e => prevSlide(e)}
            className='flex flex-start  w-48 all items-center focus:outline-none text-white bg-gray-800 transform scale-100 hover:scale-110 transition duration-500 ease-in-out'
          >
            <ChevronLeft />
          </button>
          {movies.slice(firstSlideNumber, slideNumber).map(movie => {
            const { poster_path, backdrop_path, id } = movie;
            return (
              <MovieItem
                handleClick={handleClick}
                id={id}
                posterPath={poster_path}
                backdropPath={backdrop_path}
                imgPath={IMG_PATH}
                key={movie.id}
              />
            );
          })}

          <button
            onClick={e => nextSlide(e)}
            className='flex flex-end w-48 all items-center focus:outline-none text-white bg-gray-800 transform scale-100 hover:scale-110 transition duration-500 ease-in-out'
          >
            <ChevronRight />
          </button>
        </div>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        <ActionMovie
          handleClick={handleClick}
          opts={opts}
          trailerUrl={trailerUrl}
          actionMovies={actionMovies}
          imgPath={IMG_PATH}
        />

        <ComedyMovie
          handleClick={handleClick}
          opts={opts}
          trailerUrl={trailerUrl}
          comedyMovies={comedyMovies}
          imgPath={IMG_PATH}
        />
        <DocsMovie
          handleClick={handleClick}
          opts={opts}
          trailerUrl={trailerUrl}
          docs={docs}
          imgPath={IMG_PATH}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Browse;
