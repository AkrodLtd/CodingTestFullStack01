import Constants from "expo-constants";
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
    return dispatch(complete(Constants.deviceId));
  } catch (error) {
    return dispatch(error());
  }
};
