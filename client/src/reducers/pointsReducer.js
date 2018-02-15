import _ from 'lodash';
import { POINTS_GAIN, POINTS_RESET } from '../actions/types';

const defaultState = 0;

export default function(state = defaultState, action) {
  switch(action.type) {
    case POINTS_GAIN:
      var newState = state;
      newState += 5;
      return newState;
    case POINTS_RESET:
      var newState = state;
      newState = 0;
      return newState;
    default:
      return state;
  }
}
