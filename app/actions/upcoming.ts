import { AppDispatch } from "../store";
import { getTMDBUrl } from "../utils";

export const UPCOMING_COMPLETE = "UPCOMING_COMPLETE";
export const UPCOMING_ERROR = "UPCOMING_ERROR";
export const UPCOMING_LOADING = "UPCOMING_LOADING";

const loading = () => {
  return {
    type: UPCOMING_LOADING,
  };
};

const error = () => {
  return {
    type: UPCOMING_ERROR,
  };
};

// TODO: remove any type
const complete = (data: any) => {
  return {
    type: UPCOMING_COMPLETE,
    data: data,
  };
};

export const get = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(loading());
    const responseJson = await getTMDBUrl("/movie/upcoming");

    return dispatch(complete(responseJson));
  } catch (error) {
    return dispatch(error());
  }
};
