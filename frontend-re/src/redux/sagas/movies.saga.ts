/* eslint-disable func-names */
import { call, put, takeEvery, all, fork } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import * as actions from '../actions/movies.action';
import { searchMovie, getMovie } from '../../services/tmdb-api';
import { TResponseError, TResponseImdb } from '../../services/tmdb-api.type';

export function* fecthMovie() {
  yield takeEvery(actions.FETCHING_MOVIE, function* (action: AnyAction) {
    let result: TResponseImdb | TResponseError;

    if (!action.query) {
      result = yield call(getMovie, action.page);
    } else {
      result = yield call(searchMovie, action.query, action.page);
    }

    if ('error' in result) {
      yield put({ type: actions.FETCH_MOVIE_FAIL });
    } else {
      yield put({
        type: actions.FETCH_MOVIE_SUCCESS,
        movies: result.results,
        total_results: result.total_results,
      });
    }
  });
}

export default function* movieSaga() {
  yield all([fork(fecthMovie)]);
}
