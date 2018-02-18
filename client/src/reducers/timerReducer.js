import _ from 'lodash';
import { TIMER_START, TIMER_RESET, TIMER_STOP } from '../actions/types';

const defaultState = 45;

export default function(state = defaultState, action) {
  switch(action.type) {
    case TIMER_START:
      var newState = state;
      newState -= 1;
      return newState;
    case TIMER_STOP:
      var newState = state;
      newState = 0;
      return newState;
    case TIMER_RESET:
      var newState = state;
      newState = 45;
      return newState;
    default:
      return state;
  }
}
