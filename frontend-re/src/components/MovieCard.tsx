import React, { useMemo, useState } from 'react';
import { Card, Button, Modal, Select, Input } from 'antd';
import { useService, useAppSelector, useAppDispatch } from '../hooks';
import { getMovieDetail } from '../services/tmdb-api';
import Image from './Image';
import Rating from './Rating';
import { TResponseDetail, TResponseError } from '../services/tmdb-api.type';
import { IWatchlistReducer } from '../redux/reducers/watchlist.reducer.type';
import { createWatchList } from '../redux/actions/watchlist.action';
import { addMovieWatchlist, removeMovieWatchlist } from '../redux/actions/watchlist-movie.action';
import { getHours } from '../helper/utils';
import { TWatchListMovieReducer } from '../redux/reducers/watchlist-movie.reducer.type';

export interface IMovieCardProps {
  id: number;
  img: string;
  title: string;
  rating: number;
  durationFromProps?: number;
  isWatchList?: boolean;
}

const { Meta } = Card;

const MovieCard: React.FC<IMovieCardProps> = ({ id, img, title, rating, isWatchList, durationFromProps }) => {
  const [duration, setduration] = useState<number>(0);
  const [newOne, setnewOne] = useState<boolean>(false);
  const [newWatchlistName, setnewWatchlistName] = useState<string>('');
  const [existWatchlist, setExistWatchlist] = useState<string>('');
  const [modal, setModal] = useState<boolean>(false);
  const watchlist = useAppSelector<IWatchlistReducer>(state => state.watchlist);
  const watchlistMovie = useAppSelector<TWatchListMovieReducer>(state => state.watchlist_movie);
  const dispatch = useAppDispatch();

  useService<TResponseDetail | TResponseError>(
    getMovieDetail,
    res => {
      if (!('error' in res)) {
        setduration(res.runtime);
      }
    },
    id,
    durationFromProps,
  );

  const watchlist_key = useMemo(() => {
    return watchlistMovie.movies.filter(item => item.movie.id === id)[0]?.watchlist_key;
  }, [id, watchlistMovie.movies]);

  const clickHandle = () => {
    if (!isWatchList) {
      setModal(true);
    } else {
      // handle remove here
      dispatch(removeMovieWatchlist(id.toString(), watchlist_key));
    }
  };

  const handleOk = () => {
    if (newOne) {
      dispatch(
        createWatchList(newWatchlistName, {
          id,
          title,
          poster_path: img,
          vote_average: rating,
          runtime: duration,
        }),
      );
    } else {
      dispatch(
        addMovieWatchlist(
          {
            id,
            title,
            poster_path: img,
            vote_average: rating,
            runtime: duration,
          },
          existWatchlist,
        ),
      );
    }
    setModal(false);
  };

  return (
    <div style={{ position: 'relative', width: 'fit-content' }}>
      <div style={{ position: 'absolute', zIndex: 10, right: 10, top: 10 }}>
        <Rating rating={rating} />
      </div>
      <Card hoverable style={{ maxWidth: 200 }} cover={<Image src={`https://image.tmdb.org/t/p/w300/${img}`} />}>
        <Meta title={title} description={`duration: ${duration ? getHours(duration) : '...'}`} />
        <br />
        <Button onClick={() => clickHandle()}>{isWatchList ? 'Remove' : 'Add to WatchList'}</Button>
      </Card>
      <Modal title='Add to Watchlist' visible={modal} onOk={handleOk} onCancel={() => setModal(false)}>
        {!newOne && (
          <div>
            Select an Existing Watchlist:
            <Select
              style={{ width: 200, marginLeft: 12 }}
              value={existWatchlist}
              onChange={v => setExistWatchlist(v)}
              placeholder='Select a Watchlist'
            >
              {watchlist.watchlist.map(item => (
                <Select.Option key={item.watchlist_key} value={item.watchlist_key}>
                  {item.watchlist_name}
                </Select.Option>
              ))}
            </Select>
          </div>
        )}
        {newOne && (
          <div>
            <Input placeholder='New Watchlist Name' onChange={e => setnewWatchlistName(e.currentTarget.value)} />
          </div>
        )}
        <div style={{ marginTop: 10 }}>
          <Button onClick={() => setnewOne(!newOne)}>
            {newOne && 'Existing Watchlist?'}
            {!newOne && 'New Watchlist?'}
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default MovieCard;
