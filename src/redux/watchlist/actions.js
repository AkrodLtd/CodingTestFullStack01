export const ActionTypes = {
  ADD: 'watchlist/ADD',
  REMOVE: 'watchlist/REMOVE',
  CLEAR: 'watchlist/CLEAR',
};

export const removeFromWatchlist = payload => ({
  type: ActionTypes.REMOVE,
  payload,
});

export const clearWatchlist = payload => ({
  type: ActionTypes.CLEAR,
  payload,
});

export const addToWatchlist = payload => ({
  type: ActionTypes.ADD,
  payload,
});
