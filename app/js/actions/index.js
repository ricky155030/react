'use strict';

export const AddCounter = function() {
  return {
    type: 'ADD_COUNTER',
  }
}

export const ChangeChoose = function(value) {
  return {
    type: 'CHANGE_CHOOSE',
    value
  }
}

export const SetModalVisibility = function(value) {
  return {
    type: 'MODAL_VISIBILITY',
    value
  }
}
