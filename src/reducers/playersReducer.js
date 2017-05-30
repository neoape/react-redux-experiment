import initialState from './initialState';
import {SET_PLAYERS, ADD_PLAYERS} from '../constants/actionTypes';

// Handles image related actions
export default (state = initialState.players, action) => {
  switch (action.type) {
    case SET_PLAYERS:
      return action.players;
    case ADD_PLAYERS:
      return [ ...state, action.players ];
    default:
      return state;
  }
}