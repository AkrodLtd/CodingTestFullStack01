import Immutable from 'seamless-immutable';
import { AnyAction } from 'redux';
import { TWatchListMovieReducer } from './watchlist-movie.reducer.type';
import * as actions from '../actions/watchlist-movie.action';

const initialState: TWatchListMovieReducer = Immutable({
  loading: false,
  error: null,
  movies: [],
});

const watchlistMovieReducer = (state = initialState, action: AnyAction): TWatchListMovieReducer => {
  switch (action.type) {
    case actions.FETCHING_WATCHLIST_MOVIE:
      return {
        ...state,
        loading: true,
        error: null,
        movies: Immutable.from([]),
      };

    case actions.FETCH_WATCHLIST_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        movies: Immutable.from(action.movies),
      };

    case actions.ADD_MOVIE_WATCHLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        movies: state.movies.concat(action.movie),
      };

    case actions.FETCH_WATCHLIST_MOVIE_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default watchlistMovieReducer;
