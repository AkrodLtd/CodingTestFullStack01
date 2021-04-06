/* eslint-disable func-names */
import { call, put, takeEvery, all, fork } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import * as actions from '../actions/watchlist.action';
import { addMovieWatchlist } from '../actions/watchlist-movie.action';
import { TResponseError, TResponseLambda } from '../../services/lambda-api.type';
import { getWatchlist, createWatchlist } from '../../services/lambda-api';
import { TWatchList } from '../reducers/watchlist.reducer.type';

export function* fetchWatchlist() {
  yield takeEvery(actions.FETCHING_WATCHLIST, function* () {
    const result: TResponseLambda | TResponseError = yield call(getWatchlist);

    if ('error' in result) {
      yield put({ type: actions.FETCH_WATCHLIST_FAIL });
    } else {
      yield put({
        type: actions.FETCH_WATCHLIST_SUCCESS,
        watchlist: result,
      });
    }
  });
}

export function* createNewWatchlist() {
  yield takeEvery(actions.CREATING_WATCHLIST, function* (action: AnyAction) {
    const result: TResponseError | TWatchList = yield call(createWatchlist, action.watchlist_name);

    if ('error' in result) {
      yield put({ type: actions.CREATE_WATCHLIST_FAIL });
    } else {
      yield put({
        type: actions.CREATE_WATCHLIST_SUCCESS,
        watchlist: result,
      });

      yield put(addMovieWatchlist(action.movie, result.watchlist_key));
    }
  });
}

export default function* watchListSaga() {
  yield all([fork(fetchWatchlist), fork(createNewWatchlist)]);
}
