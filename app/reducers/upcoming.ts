import {
  UPCOMING_COMPLETE,
  UPCOMING_ERROR,
  UPCOMING_LOADING,
} from "../actions/upcoming";

const defaultState = {
  loading: false,
  data: null,
};

export default function Upcoming(state = defaultState, action: any) {
  switch (action.type) {
    case UPCOMING_LOADING:
      return {
        ...state,
        loading: true,
      };
      break;
    case UPCOMING_ERROR:
      return {
        ...state,
        loading: false,
        data: null,
      };
      break;
    case UPCOMING_COMPLETE:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
      break;
  }
  return state;
}
