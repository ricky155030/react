'use strict';

import * as type from '../constants/ActionTypes'

export const visibility = function(state = false, action) {
  switch (action.type) {
    case type.MODAL_VISIBILITY:
      return action.value
    default:
      return state
  }
}

export const choice = function(state = {}, action) {
  switch (action.type) {
    case type.CHANGE_CHOICE:
      return Object.assign({}, state, action.value)
    default:
      return state
  }
}

export const selected = function(state = {}, action) {
  switch (action.type) {
    case type.CHANGE_CHOICE:
      return Object.assign({}, state, action.value)
    default:
      return state
  }
}
