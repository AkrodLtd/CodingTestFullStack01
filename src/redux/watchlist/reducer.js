import {stat} from '@nodelib/fs.stat';
import {ActionTypes} from './actions';
const INITIAL_STATE = {
  allWatchlist: [],
  error: null,
};

export const WatchlistReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case ActionTypes.ADD: {
      const {allWatchlist} = state;
      allWatchlist.push(payload);
      return {
        ...state,
        allWatchlist,
      };
    }
    case ActionTypes.REMOVE: {
      const {allWatchlist} = state;
      const newWatchlist = allWatchlist.filter(item => item.id !== payload.id);
      return {
        ...state,
        allWatchlist: newWatchlist,
      };
    }
    case ActionTypes.CLEAR: {
      return {
        ...state,
        allWatchlist: [],
      };
    }
    default:
      return INITIAL_STATE;
  }
};
