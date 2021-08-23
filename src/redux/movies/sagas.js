import {
  takeEvery,
  takeLatest,
  call,
  fork,
  put,
  select,
} from 'redux-saga/effects';
import {fetchMovies} from '../../api/MoviesAPI';
import {ActionTypes} from './actions';

const getMovies = state => state.movies.allMovies;


const fetchMoviesSaga = function* ({payload}) {
  try {
    const response = yield call(fetchMovies, payload);
    if (response?.status === 200) {
      const {
        data: {page, results},
      } = response;

      const previousMovies = yield select(getMovies);
      const movies = [...previousMovies, ...results];

      yield put({
        type: ActionTypes.FETCH_MOVIES_SUCCESS,
        payload: {page, results: movies},
      });
    } else {
      yield put({
        type: ActionTypes.FETCH_MOVIES_ERROR,
        payload: {error: 'Error fetching movies'},
      });
    }
  } catch (error) {
    console.error('[Error: ] ', error);
    yield put({
      type: ActionTypes.FETCH_MOVIES_ERROR,
      payload: {error},
    });
  }
};

function* watchfetchMoviesSaga() {
  yield takeLatest(ActionTypes.FETCH_MOVIES, fetchMoviesSaga);
}

const MoviesSagas = [fork(watchfetchMoviesSaga)];

export default MoviesSagas;
