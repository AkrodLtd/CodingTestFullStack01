import { AppDispatch } from "../store";
import { getTMDBUrl } from "../utils";

export const SEARCH_COMPLETE = "SEARCH_COMPLETE";
export const SEARCH_ERROR = "SEARCH_ERROR";
export const SEARCH_LOADING = "SEARCH_LOADING";

const loading = () => {
  return {
    type: SEARCH_LOADING,
  };
};

const error = () => {
  return {
    type: SEARCH_ERROR,
  };
};

// TODO: remove any type
const complete = (data: any) => {
  return {
    type: SEARCH_COMPLETE,
    data: data,
  };
};

export const get = (terms: string) => async (dispatch: AppDispatch) => {
  try {
    if (!terms || !terms.length) {
      return dispatch(complete([]));
    }

    dispatch(loading());
    const responseJson = await getTMDBUrl(`/search/movie?query=${terms}`);

    return dispatch(complete(responseJson.results));
  } catch (error) {
    return dispatch(error());
  }
};

export const reset = () => async (dispatch: AppDispatch) => {
  return dispatch(complete([]));
};
