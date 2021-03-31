import { combineReducers } from 'redux';

import upcoming from './upcoming';
import search from './search';

const rootReducer = combineReducers({
    upcoming,
    search
});

export default rootReducer;
