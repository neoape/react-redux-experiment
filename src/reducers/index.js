import { combineReducers } from 'redux';
import players from './playersReducer';

// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
  players
});

export default rootReducer;