import axios from 'axios';

const API_KEY = 'f8cb0a079cd7911f3a1e56151643e3c8';
const API_URL = 'https://api.themoviedb.org/3';
//const URL = 'discover/movie?api_key=&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';

export const fetchMovies = ({page = 1}) => {
  return axios.get(`${API_URL}/discover/movie`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      sort_by: 'popularity.desc',
      page,
    },
  });
};
