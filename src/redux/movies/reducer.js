import {ActionTypes} from './actions';

const INITIAL_STATE = {
  allMovies: [],
  error: null,
  loading: false,
  page: -1,
};

export const MoviesReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case ActionTypes.FETCH_MOVIES_SUCCESS: {
      return {
        ...state,
        loading: false,
        allMovies: payload.results,
        page: payload.page,
        error: null,
      };
    }
    case ActionTypes.FETCH_MOVIES_ERROR: {
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    }
    case ActionTypes.FETCH_MOVIES: {
      return {
        ...state,
        loading: true,
      };
    }
    default: {
      return {...state};
    }
  }
};
