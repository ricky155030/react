'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Main from './components/main.js';
import MyReducer from './reducers'

let store = createStore(MyReducer)

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('content')
)
