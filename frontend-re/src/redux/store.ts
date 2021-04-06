/* eslint-disable func-names */
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import reducer from './reducers/reducer';
import rootSagas from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default function () {
  sagaMiddleware.run(rootSagas);
  return store;
}
