'use strict';

import fetch from 'isomorphic-fetch'
import * as type from '../constants/ActionTypes'

export const AddCounter = function() {
  return {
    type: type.ADD_COUNTER,
  }
}

export const ChangeChoice = function(value) {
  return {
    type: type.CHANGE_CHOICE,
    value
  }
}

export const SetModalVisibility = function(value) {
  return {
    type: type.MODAL_VISIBILITY,
    value
  }
}
