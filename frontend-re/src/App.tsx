import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieList from './pages/movie-list';
import WatchList from './pages/watch-list';
import { fetchWatchlist } from './redux/actions/watchlist.action';
import { fetchWatchlistMovie } from './redux/actions/watchlist-movie.action';
import { useAppDispatch } from './hooks';
import './App.css';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchWatchlist());
    dispatch(fetchWatchlistMovie());
  }, [dispatch]);

  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={MovieList} />
          <Route path='/watch-list' exact component={WatchList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
