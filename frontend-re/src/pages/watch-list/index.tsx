import React, { useState, useMemo } from 'react';
import { Row, Col } from 'antd';
import Header from '../../components/Header';
import { useAppSelector } from '../../hooks';
import { TWatchListMovieReducer } from '../../redux/reducers/watchlist-movie.reducer.type';
import MovieCard from '../../components/MovieCard';

const WatchList = () => {
  const [watchlist, setwatchlist] = useState<string>('all');
  const watchlistMovie = useAppSelector<TWatchListMovieReducer>(state => state.watchlist_movie);

  const watchlistMovie_Filtered = useMemo(() => {
    if (watchlist === 'all') return watchlistMovie.movies;

    return watchlistMovie.movies.filter(movie => movie.watchlist_key === watchlist);
  }, [watchlist, watchlistMovie]);

  return (
    <div>
      <Header title='My Watch List' onSelect={cate => setwatchlist(cate)} />
      <div style={{ marginTop: 50 }}>
        <Row>
          {watchlistMovie_Filtered.map((movie, index) => (
            <Col lg={4} md={6} key={index.toString()}>
              <MovieCard
                id={movie.movie.id}
                title={movie.movie.title}
                img={movie.movie.poster_path}
                rating={movie.movie.vote_average}
                durationFromProps={movie.movie.runtime}
                isWatchList
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default WatchList;
