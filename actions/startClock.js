import * as actionTypes from '../constants/actionTypes'

export const startClock = () => dispatch => {
  return setInterval(() => dispatch({
    type: actionTypes.TICK,
    light: true,
    ts: Date.now()
  }), 800)
}