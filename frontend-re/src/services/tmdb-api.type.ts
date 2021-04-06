import { TMovie } from '../redux/reducers/movies.reducer.type';

export type TResponseImdb = {
  page: string;
  total_results: number;
  results: TMovie[];
};

export type TResponseError = {
  error: boolean;
};

export type TResponseDetail = {
  runtime: number;
};
