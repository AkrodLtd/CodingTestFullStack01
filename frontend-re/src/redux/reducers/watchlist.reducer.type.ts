import { ImmutableArray } from 'seamless-immutable';
import { TReducer } from './reducer.types';

export type TWatchList = {
  watchlist_name: string;
  watchlist_key: string;
};

export interface IWatchlistReducer extends TReducer {
  watchlist: ImmutableArray<TWatchList>;
}
