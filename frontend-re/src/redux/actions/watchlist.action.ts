import { AnyAction } from 'redux';
import { TMovie } from '../reducers/movies.reducer.type';

export const FETCH_WATCHLIST_SUCCESS = 'FETCH_WATCHLIST_SUCCESS';

export const FETCH_WATCHLIST_FAIL = 'FETCH_WATCHLIST_FAIL';

export const FETCHING_WATCHLIST = 'FETCHING_WATCHLIST';

export const CREATING_WATCHLIST = 'CREATING_WATCHLIST';

export const CREATE_WATCHLIST_SUCCESS = 'CREATE_WATCHLIST_SUCCESS';

export const CREATE_WATCHLIST_FAIL = 'CREATE_WATCHLIST_FAIL';

export const fetchWatchlist = (): AnyAction => ({ type: FETCHING_WATCHLIST });

export const createWatchList = (name: string, movie: TMovie & { runtime: number }): AnyAction => ({
  type: CREATING_WATCHLIST,
  watchlist_name: name,
  movie,
});
