import { AppDispatch, GetState } from "../store";

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

export const add = (movie: any, userID: string) => async (
  dispatch: AppDispatch,
  getState: GetState
) => {
  try {
    dispatch(loading());

    const watchlist = getState().watchlist.data;
    // TODO: Save movie ID into DB
    // TODO: Get updated list of movies in the watchlist

    return dispatch(complete([...watchlist, movie]));
  } catch (error) {
    return dispatch(error());
  }
};

export const remove = ({ id }: any, userID: string) => async (
  dispatch: AppDispatch,
  getState: GetState
) => {
  try {
    dispatch(loading());

    const watchlist = getState().watchlist.data;

    const filteredList = watchlist.filter((movie: any) => movie.id !== id);

    // TODO: Remove movie ID from DB
    // TODO: Get updated list of movies in the watchlist

    return dispatch(complete(filteredList));
  } catch (error) {
    return dispatch(error());
  }
};
