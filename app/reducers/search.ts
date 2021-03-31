import {
  SEARCH_COMPLETE,
  SEARCH_ERROR,
  SEARCH_LOADING,
} from "../actions/search";

const defaultState = {
  loading: false,
  data: [],
};

export default function Search(state = defaultState, action: any) {
  switch (action.type) {
    case SEARCH_LOADING:
      return {
        ...state,
        loading: true,
      };
      break;
    case SEARCH_ERROR:
      return {
        ...state,
        loading: false,
        data: null,
      };
      break;
    case SEARCH_COMPLETE:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
      break;
  }
  return state;
}
