import Immutable from 'seamless-immutable';
import { AnyAction } from 'redux';
import { IWatchlistReducer } from './watchlist.reducer.type';
import * as actions from '../actions/watchlist.action';

const initialState: IWatchlistReducer = Immutable({
  loading: false,
  error: null,
  watchlist: [],
});

const watchlistReducer = (state = initialState, action: AnyAction): IWatchlistReducer => {
  switch (action.type) {
    case actions.FETCHING_WATCHLIST:
      return {
        ...state,
        loading: true,
        error: null,
        watchlist: Immutable.from([]),
      };

    case actions.FETCH_WATCHLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        watchlist: Immutable.from(action.watchlist),
      };

    case actions.FETCH_WATCHLIST_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
        watchlist: Immutable.from([]),
      };

    case actions.CREATING_WATCHLIST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case actions.CREATE_WATCHLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        watchlist: state.watchlist.concat([action.watchlist]),
      };

    case actions.CREATE_WATCHLIST_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default watchlistReducer;
