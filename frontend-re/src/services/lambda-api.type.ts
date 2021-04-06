import { TWatchList } from '../redux/reducers/watchlist.reducer.type';

export type TResponseLambda = TWatchList[];

export type TResponseError = {
  error: boolean;
};

export type TWatchListMovie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  runtime: number;
};

export type TWatchListMovieResponse = {
  movie: TWatchListMovie;
  watchlist_key: string;
}[];
