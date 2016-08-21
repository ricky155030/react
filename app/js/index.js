'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import Main from './components/main.js';
import MyReducer from './reducers'
import { fetchKPIData } from './actions'

const logger = createLogger()
const createStoreMiddleware = applyMiddleware(
  thunkMiddleware,
  logger
)(createStore)

const store = createStoreMiddleware(MyReducer)

store.dispatch(fetchKPIData('database', 'data'))

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('content')
)
