'use strict';

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Responsive, WidthProvider } from 'react-grid-layout'

const RWDGrid = WidthProvider(Responsive);

import Navigator from './Navigator'
import Content from './Content'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class Main extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Navigator />
          <Content />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Main;
