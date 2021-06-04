import React, { Children, useReducer } from 'react';
import MovieContext from './movieContext';
import movieReducer from './movieReducer';
import axios from 'axios';
import { GET_MOVIES, GET_ACTION, GET_COMEDY, GET_DOCS } from './types';

const MovieState = (props) => {
  const initialState = {
    movies: [],
    actionMovies: [],
    comedyMovies: [],
    docs: [],
  };

  const API_URL_ALL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b4d9150daa32ba3c4f9356f39daaa7bf`;
  const API_URL_ACTION = `https://api.themoviedb.org/3/discover/movie?api_key=b4d9150daa32ba3c4f9356f39daaa7bf&with_genres=28`;
  const API_URL_COMEDY = `https://api.themoviedb.org/3/discover/movie?api_key=b4d9150daa32ba3c4f9356f39daaa7bf&with_genres=35`;
  const API_URL_DOCS = `https://api.themoviedb.org/3/discover/movie?api_key=b4d9150daa32ba3c4f9356f39daaa7bf&with_genres=99`;

  const [state, dispatch] = useReducer(movieReducer, initialState);

  //Get Movies
  const getMovies = async () => {
    try {
      const res = await fetch(API_URL_ALL);
      const data = await res.json();

      dispatch({ type: GET_MOVIES, payload: data.results });
    } catch (err) {
      console.log(err.message);
    }
  };

  //Get Action
  const getActionMovies = async () => {
    try {
      const res = await fetch(API_URL_ACTION);
      const data = await res.json();

      dispatch({ type: GET_ACTION, payload: data.results });
    } catch (err) {
      console.log(err.message);
    }
  };

  //Get Comedy
  const getComedyMovies = async () => {
    try {
      const res = await fetch(API_URL_COMEDY);
      const data = await res.json();

      dispatch({ type: GET_COMEDY, payload: data.results });
    } catch (err) {
      console.log(err.message);
    }
  };

  //Get Docs
  const getDocs = async () => {
    try {
      const res = await fetch(API_URL_DOCS);
      const data = await res.json();

      dispatch({ type: GET_DOCS, payload: data.results });
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        actionMovies: state.actionMovies,
        comedyMovies: state.comedyMovies,
        docs: state.docs,
        getMovies,
        getActionMovies,
        getComedyMovies,
        getDocs,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
