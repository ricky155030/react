'use strict';

import { combineReducers } from 'redux'
import { visibility, choice, selected } from './modal'

const Modal = combineReducers({
  visibility,
  choice,
  selected
})

const MyReducer = combineReducers({
  Modal
})

export default MyReducer
