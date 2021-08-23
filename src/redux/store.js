import {combineReducers, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';
import logger from 'redux-logger';
import {MoviesReducer} from './movies/reducer';
import MoviesSagas from './movies/sagas';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WatchlistReducer } from './watchlist/reducer';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  movies: MoviesReducer,
  watchlist: WatchlistReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
 
const persistedReducer = persistReducer(persistConfig, reducers);

const middleware = applyMiddleware(sagaMiddleware, logger);

export const store = createStore(persistedReducer, middleware);
export const persistor = persistStore(store, null, () => {});

const sagas = function* () {
  yield all([...MoviesSagas]);
};

sagaMiddleware.run(sagas);
