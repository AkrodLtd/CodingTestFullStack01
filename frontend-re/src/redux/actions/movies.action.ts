import { AnyAction } from 'redux';

export const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';

export const FETCH_MOVIE_FAIL = 'FETCH_MOVIE_FAIL';

export const FETCHING_MOVIE = 'FETCHING_MOVIE';

export const fetchMovies = (query?: string, page?: number): AnyAction => ({ type: FETCHING_MOVIE, query, page });
