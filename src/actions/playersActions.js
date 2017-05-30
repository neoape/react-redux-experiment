import {SET_PLAYERS, ADD_PLAYERS} from '../constants/actionTypes'

export const setPlayers = (players) => ({
  type: SET_PLAYERS,
  players
})

export const addPlayers = (players) => ({
  type: ADD_PLAYERS,
  players
})

