import { AppDispatch, GetState } from "../store";
import fetchWatchlist from "../utils/fetchWatchlist";

export const WATCHLIST_COMPLETE = "WATCHLIST_COMPLETE";
export const WATCHLIST_ERROR = "WATCHLIST_ERROR";
export const WATCHLIST_LOADING = "WATCHLIST_LOADING";

const loading = () => {
  return {
    type: WATCHLIST_LOADING,
  };
};

const error = () => {
  return {
    type: WATCHLIST_ERROR,
  };
};

// TODO: remove any type
const complete = (data: any) => {
  return {
    type: WATCHLIST_COMPLETE,
    data: data,
  };
};

export const add = (movie: any) => async (
  dispatch: AppDispatch,
  getState: GetState
) => {
  try {
    dispatch(loading());

    const userID = getState().user.id;

    const list = await fetchWatchlist(`/watchlist/${userID}`, {
      body: JSON.stringify(movie),
      method: "POST",
    });

    return dispatch(complete(list));
  } catch (error) {
    return dispatch(error());
  }
};

export const remove = ({ id }: any) => async (
  dispatch: AppDispatch,
  getState: GetState
) => {
  try {
    dispatch(loading());

    const userID = getState().user.id;

    const list = await fetchWatchlist(`/watchlist/${userID}/${id}`, {
      method: "DELETE",
    });

    return dispatch(complete(list));
  } catch (error) {
    return dispatch(error());
  }
};

export const get = () => async (dispatch: AppDispatch, getState: GetState) => {
  try {
    dispatch(loading());

    const userID = getState().user.id;

    const list = await fetchWatchlist(`/watchlist/${userID}`, {
      method: "GET",
    });

    return dispatch(complete(list));
  } catch (error) {
    return dispatch(error());
  }
};
