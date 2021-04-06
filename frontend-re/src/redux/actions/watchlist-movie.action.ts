import { AnyAction } from 'redux';
import { TMovie } from '../reducers/movies.reducer.type';

export const FETCH_WATCHLIST_MOVIE_SUCCESS = 'FETCH_WATCHLIST_MOVIE_SUCCESS';

export const FETCH_WATCHLIST_MOVIE_FAIL = 'FETCH_WATCHLIST_MOVIE_FAIL';

export const FETCHING_WATCHLIST_MOVIE = 'FETCHING_WATCHLIST_MOVIE';

export const ADD_MOVIE_WATCHLIST = 'ADD_MOVIE_WATCHLIST';

export const ADD_MOVIE_WATCHLIST_SUCCESS = 'ADD_MOVIE_WATCHLIST_SUCCESS';

export const REMOVE_MOVIE_WATCHLIST = 'REMOVE_MOVIE_WATCHLIST';

export const REMOVE_MOVIE_WATCHLIST_SUCCESS = 'REMOVE_MOVIE_WATCHLIST_SUCCESS';

export const fetchWatchlistMovie = (): AnyAction => ({ type: FETCHING_WATCHLIST_MOVIE });

export const addMovieWatchlist = (movie: TMovie & { runtime: number }, watchlist_key: string): AnyAction => ({
  type: ADD_MOVIE_WATCHLIST,
  movie,
  watchlist_key,
});

export const removeMovieWatchlist = (movie_id: string, watchlist_key: string): AnyAction => ({
  type: REMOVE_MOVIE_WATCHLIST,
  movie_id,
  watchlist_key,
});
