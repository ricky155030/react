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

export const fetchKPIData = function(nextLabel, path) {
  return dispatch => {
    let result = {}
    if(nextLabel) {
      fetch('http://localhost:3000/' + path)
        .then( response => response.json() )
        .then( data => {
          result[nextLabel] = data
          dispatch(ChangeChoice(result))
        })
        .catch(err => { throw err; })
    } else {
      dispatch(ChangeChoice(result))
    }
  }
}
