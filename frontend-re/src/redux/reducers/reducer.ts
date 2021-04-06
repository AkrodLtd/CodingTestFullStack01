import { combineReducers } from 'redux';

import moviesReducer from './movies.reducer';
import watchlistReducer from './watchlist.reducer';
import watchlistMovieReducer from './watchlist-movie.reducer';

export default combineReducers({
  movies: moviesReducer,
  watchlist: watchlistReducer,
  watchlist_movie: watchlistMovieReducer,
});
