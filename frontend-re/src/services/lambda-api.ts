/* eslint-disable no-console */
import axios from 'axios';
import { TMovie } from '../redux/reducers/movies.reducer.type';
import { TWatchList } from '../redux/reducers/watchlist.reducer.type';
import { TResponseLambda, TResponseError, TWatchListMovieResponse } from './lambda-api.type';

const base_domain = process.env.NODE_ENV === 'production' ? '<PRODUCTION_URL>' : 'http://localhost:3030';
const watchlist_api = `${base_domain}/dev/watchlist`;

export async function getWatchlist(): Promise<TResponseLambda | TResponseError> {
  try {
    return await axios.get(`${watchlist_api}/list`).then(res => res.data);
  } catch (e) {
    console.log(e);
    return { error: true };
  }
}

export async function createWatchlist(watchlist_name: string): Promise<TWatchList | TResponseError> {
  try {
    return await axios
      .post(`${watchlist_api}/create`, {
        watchlist_name,
      })
      .then(res => res.data);
  } catch (e) {
    console.log(e);
    return { error: true };
  }
}

const movie_api = `${base_domain}/dev/movie`;

export async function addMovie(_movie: TMovie & { runtime: number }, watchlist_key: string): Promise<TResponseError> {
  try {
    return await axios
      .post(`${movie_api}/add`, {
        watchlist_key,
        movie: _movie,
      })
      .then(res => res.data);
  } catch (e) {
    return { error: true };
  }
}

export async function getWatchlistMovie(): Promise<TWatchListMovieResponse | TResponseError> {
  try {
    return await axios.post(`${movie_api}/list`).then(res => res.data);
  } catch (e) {
    console.log(e);
    return { error: true };
  }
}

export async function removeMovie(movie_id: string, watchlist_key: string): Promise<TResponseError> {
  try {
    return await axios.delete(`${movie_api}/delete`, { data: { movie_id, watchlist_key } }).then(res => res.data);
  } catch (e) {
    return { error: true };
  }
}

// export async function getMovieDetail(movie_id: number, duration_from: number): Promise<TResponseDetail | TResponseError> {
//   if (duration_from) {
//     return {
//       runtime: duration_from,
//     };
//   }
//   try {
//     return await axios.get(`${imdb_api}/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`).then(res => res.data);
//   } catch (e) {
//     console.log(e);
//     return { error: true };
//   }
// }
