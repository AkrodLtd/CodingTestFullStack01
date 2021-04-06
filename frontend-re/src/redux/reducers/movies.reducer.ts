import Immutable from 'seamless-immutable';
import { AnyAction } from 'redux';
import { TMovieReducer } from './movies.reducer.type';
import * as actions from '../actions/movies.action';

const initialState = Immutable({
  loading: false,
  error: null,
  movies: [],
  total_results: 0,
});

const moviesReducer = (state = initialState, action: AnyAction): TMovieReducer => {
  switch (action.type) {
    case actions.FETCHING_MOVIE:
      return {
        ...state,
        loading: true,
        error: null,
        movies: Immutable.from([]),
        total_results: 0,
      };

    case actions.FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        movies: Immutable.from(action.movies),
        total_results: action.total_results,
      };

    case actions.FETCH_MOVIE_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
        movies: Immutable.from([]),
        total_results: 0,
      };

    default:
      return state;
  }
};

export default moviesReducer;
