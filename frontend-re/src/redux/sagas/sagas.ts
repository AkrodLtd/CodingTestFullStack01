import { all } from 'redux-saga/effects';

import movieSaga from './movies.saga';
import watchlistSaga from './watchlist.saga';
import wathlistMovieSaga from './watchlist-movie.saga';

export default function* rootSaga() {
  yield all([movieSaga(), watchlistSaga(), wathlistMovieSaga()]);
}
