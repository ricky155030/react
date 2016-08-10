'use strict';

import { combineReducers } from 'redux'
import { counter, choose } from './TextFieldReducer'

const MyReducer = combineReducers({
  counter,
  choose
})

export default MyReducer
