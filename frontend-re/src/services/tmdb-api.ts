import axios from 'axios';
import { TResponseImdb, TResponseError, TResponseDetail } from './tmdb-api.type';

const imdb_api = 'https://api.themoviedb.org/3';

export async function getMovie(page = 1): Promise<TResponseImdb | TResponseError> {
  try {
    return await axios
      .get(`${imdb_api}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
      .then(res => res.data);
  } catch (e) {
    console.log(e);
    return { error: true };
  }
}

export async function searchMovie(query: string, page = 1): Promise<TResponseImdb | TResponseError> {
  try {
    return await axios
      .get(`${imdb_api}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=${page}`)
      .then(res => res.data);
  } catch (e) {
    console.log(e);
    return { error: true };
  }
}

export async function getMovieDetail(movie_id: number, duration_from: number): Promise<TResponseDetail | TResponseError> {
  if (duration_from) {
    return {
      runtime: duration_from,
    };
  }
  try {
    return await axios.get(`${imdb_api}/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`).then(res => res.data);
  } catch (e) {
    console.log(e);
    return { error: true };
  }
}
