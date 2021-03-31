import { combineReducers } from "redux";

import upcoming from "./upcoming";
import search from "./search";
import watchlist from "./watchlist";
import user from "./user";

const rootReducer = combineReducers({
  upcoming,
  search,
  watchlist,
  user,
});

export default rootReducer;
