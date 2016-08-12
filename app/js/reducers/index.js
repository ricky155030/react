'use strict';

import { combineReducers } from 'redux'
import { counter, choose } from './TextFieldReducer'
import { visibility } from './modal'

const Modal = combineReducers({
  visibility
})

const MyReducer = combineReducers({
  Modal
})

export default MyReducer
