import {
  WATCHLIST_COMPLETE,
  WATCHLIST_ERROR,
  WATCHLIST_LOADING,
} from "../actions/watchlist";

const defaultState = {
  loading: false,
  data: [],
};

export default function Watchlist(state = defaultState, action: any) {
  switch (action.type) {
    case WATCHLIST_LOADING:
      return {
        ...state,
        loading: true,
      };
      break;
    case WATCHLIST_ERROR:
      return {
        ...state,
        loading: false,
        data: [],
      };
      break;
    case WATCHLIST_COMPLETE:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
      break;
  }
  return state;
}
