/* eslint-disable func-names */
import { AnyAction } from 'redux';
import { call, put, takeEvery, all, fork } from 'redux-saga/effects';
import * as actions from '../actions/watchlist-movie.action';
import { addMovie, getWatchlistMovie, removeMovie } from '../../services/lambda-api';
import { TResponseError, TWatchListMovie, TWatchListMovieResponse } from '../../services/lambda-api.type';

export function* fetchWatchlistMovie() {
  yield takeEvery(actions.FETCHING_WATCHLIST_MOVIE, function* () {
    const result: TWatchListMovieResponse | TResponseError = yield call(getWatchlistMovie);

    if ('error' in result) {
      yield put({ type: actions.FETCH_WATCHLIST_MOVIE_FAIL });
    } else {
      yield put({
        type: actions.FETCH_WATCHLIST_MOVIE_SUCCESS,
        movies: result,
      });
    }
  });
}

export function* addMovieWatchlist() {
  yield takeEvery(actions.ADD_MOVIE_WATCHLIST, function* (action: AnyAction) {
    const result: { movie: TWatchListMovie; watchlist_key: string } | TResponseError = yield call(
      addMovie,
      action.movie,
      action.watchlist_key,
    );

    if ('error' in result) {
      yield put({ type: actions.FETCH_WATCHLIST_MOVIE_FAIL });
    } else {
      yield put({
        type: actions.ADD_MOVIE_WATCHLIST_SUCCESS,
        movie: result,
      });
    }
  });
}

export function* removeMovieWatchlist() {
  yield takeEvery(actions.REMOVE_MOVIE_WATCHLIST, function* (action: AnyAction) {
    const result: { message: string } | TResponseError = yield call(removeMovie, action.movie_id, action.watchlist_key);

    if ('error' in result) {
      yield put({ type: actions.FETCH_WATCHLIST_MOVIE_FAIL });
    } else {
      yield put({
        type: actions.FETCHING_WATCHLIST_MOVIE,
      });
    }
  });
}

export default function* wathlistMovieSaga() {
  yield all([fork(fetchWatchlistMovie), fork(addMovieWatchlist), fork(removeMovieWatchlist)]);
}
