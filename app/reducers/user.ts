import { USER_UPDATE } from "../actions/user";

const defaultState = {
  id: null,
};

export default function User(state = defaultState, action: any) {
  switch (action.type) {
    case USER_UPDATE:
      return {
        ...state,
        id: action.data,
      };
      break;
  }
  return state;
}
