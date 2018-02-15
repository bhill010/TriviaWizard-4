import _ from 'lodash';
import { TIMER_START, TIMER_RESET, TIMER_STOP } from '../actions/types';

const defaultState = 5;

export default function(state = defaultState, action) {
  switch(action.type) {
    case TIMER_START:
      var newState = state;
      newState -= 1;
      return newState;
      // var newState = state;
      // const test = (value) => {
      //   newState = value;
      // }
      // if (this.props.timer === 5) {
      //   var score = 0;
      //   var gameTimer = setInterval(() => {
      //     console.log("this.props.timer",this.props.timer);
      //     console.log(this.props.timer);
      //     console.log(score);
      //     this.props.countDown();
      //     if (this.props.timer === -1) {
      //       clearInterval(gameTimer)
      //     }
      //   }, 1000);
      // }
      // var gameTimer = setInterval(() => {
      //   console.log("newState timer", newState);
      //   // test(newState)
      //   newState -= 1;
      //   if (newState < 0) {
      //     newState = 0;
      //     clearInterval(gameTimer)
      //     return newState;
      //   } else {
      //     return newState;
      //   }
      // }, 1000);
      // newState -= 1;
      // if (newState < 0) {
      //   newState = 0;
      //   return newState;
      // } else {
      //   return newState;
      // }
    // case TIMER_TICK:
    //   var newState = state;
    //   newState -= 1;
    //   return newState;
    case TIMER_STOP:
      var newState = state;
      newState = 0;
      return newState;
    case TIMER_RESET:
      var newState = state;
      newState = 5;
      return newState;
    default:
      return state;
  }
}
