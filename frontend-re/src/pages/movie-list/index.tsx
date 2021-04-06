import React, { useCallback, useEffect, useState } from 'react';
import { Row, Col, Pagination } from 'antd';
import Header from '../../components/Header';
import MovieCard from '../../components/MovieCard';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchMovies } from '../../redux/actions/movies.action';
import { TMovieReducer } from '../../redux/reducers/movies.reducer.type';
import { TWatchListMovieReducer } from '../../redux/reducers/watchlist-movie.reducer.type';

const MovieList = () => {
  const [search, setsearch] = useState<string>('');
  const [page, setpage] = useState<number>(1);
  const movies = useAppSelector<TMovieReducer>(state => state.movies);
  const watchListMovie = useAppSelector<TWatchListMovieReducer>(state => state.watchlist_movie);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies(search, page));
  }, [dispatch, search, page]);

  const isWatchList = useCallback(
    (item_id: number) => {
      if (watchListMovie.movies.filter(movie => movie.movie.id === item_id).length > 0) {
        return true;
      }

      return false;
    },
    [watchListMovie],
  );

  return (
    <div>
      <Header title='Movie List' onSearch={(title: string) => setsearch(title)} />

      {movies.loading && <div style={{ height: 50, marginTop: 50 }}>Loading...</div>}
      {movies.error && <div style={{ height: 50, marginTop: 50 }}>Error while fetching...</div>}
      {!movies.movies.length && <div style={{ height: 50, marginTop: 50 }}>No Data to show...</div>}

      <div style={{ marginTop: 50 }}>
        <Row>
          {movies.movies.map(movie => (
            <Col lg={4} md={6} key={movie.id.toString()} style={{ marginBottom: 10 }}>
              <MovieCard
                id={movie.id}
                title={movie.title}
                rating={movie.vote_average}
                img={movie.poster_path || ''}
                isWatchList={isWatchList(movie.id)}
              />
            </Col>
          ))}
        </Row>
      </div>
      <div className='pagination__component' style={{ padding: 50 }}>
        <Pagination
          current={page}
          pageSize={20}
          total={movies.total_results}
          showSizeChanger={false}
          onChange={pageNum => setpage(pageNum)}
        />
      </div>
    </div>
  );
};

export default MovieList;
