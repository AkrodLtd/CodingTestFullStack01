import { AppDispatch } from "../store";

export const USER_UPDATE = "USER_UPDATE";

const complete = (data: any) => {
  return {
    type: USER_UPDATE,
    data: data,
  };
};

export const update = () => async (dispatch: AppDispatch) => {
  try {

    // TODO: generate user id and save it
    const id = "123"

    return dispatch(complete(id));
  } catch (error) {
    return dispatch(error());
  }
};
