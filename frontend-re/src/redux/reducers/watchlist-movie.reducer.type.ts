import { Immutable } from 'seamless-immutable';
import { TReducer } from './reducer.types';
import { TWatchListMovieResponse } from '../../services/lambda-api.type';

export interface TWatchListMovieReducer extends TReducer {
  movies: Immutable<TWatchListMovieResponse>;
}
