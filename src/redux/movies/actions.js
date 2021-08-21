export const ActionTypes = {
  FETCH_MOVIES: 'movies/FETCH',
  FETCH_MOVIES_SUCCESS: 'movies/FETCH_SUCCESS',
  FETCH_MOVIES_ERROR: 'movies/FETCH_ERROR',
  CLEAR: 'movies/CLEAR',
};

export const fetchMovies = payload => ({
  type: ActionTypes.FETCH_MOVIES,
  payload,
});

export const clear = () => ({
  type: ActionTypes.CLEAR,
});
