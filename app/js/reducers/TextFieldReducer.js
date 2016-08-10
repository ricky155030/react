'use strict';

export const counter = function(state = 0, action) {
  switch (action.type) {
    case 'ADD_COUNTER':
      return state + 1
    default:
      return state
  }
}

export const choose = function(state = '', action) {
  switch (action.type) {
    case 'CHANGE_CHOOSE':
      console.log(action)
      return action.value
    default:
      return state
  }
}
