import { GET_MOVIES, GET_ACTION, GET_COMEDY, GET_DOCS } from './types';

export default (state, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case GET_ACTION:
      return {
        ...state,
        actionMovies: action.payload,
      };
    case GET_COMEDY:
      return {
        ...state,
        comedyMovies: action.payload,
      };
    case GET_DOCS:
      return {
        ...state,
        docs: action.payload,
      };
    default:
      return state;
  }
};
