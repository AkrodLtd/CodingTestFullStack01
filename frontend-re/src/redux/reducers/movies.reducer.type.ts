import { ImmutableArray } from 'seamless-immutable';
import { TReducer } from './reducer.types';

export type TMovie = {
  id: number;
  title: string;
  vote_average: number;
  poster_path?: string;
};

export interface TMovieReducer extends TReducer {
  movies: ImmutableArray<TMovie>;
  total_results: number;
}
