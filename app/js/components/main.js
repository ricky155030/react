'use strict';

import React from 'react';
import PanelContainer from '../containers/PanelContainer'
import Grid from './Grid'
import SMCModalContainer from '../containers/SMCModalContainer'

class Main extends React.Component {
  render() {
    return (
      <div>
        <PanelContainer />
        <Grid />
        <SMCModalContainer />
      </div>
    )
  }
}

export default Main;
