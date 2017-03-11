import * as actionTypes from '../constants/actionTypes'

export default function tick(state = {}, action) {
	switch (action.type) {
    case actionTypes.TICK: 
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      })
    default: 
      return state
  }
}