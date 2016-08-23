'use strict';

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Responsive, WidthProvider } from 'react-grid-layout'

const RWDGrid = WidthProvider(Responsive);

import Panel from './Panel'
import Sidebar from './Sidebar'

class Content extends React.Component {
  render() {
    return (
      <RWDGrid
        cols={this.props.cols} 
        breakpoints={this.props.breakpoints} 
      >
        <div 
          key="1" 
          data-grid={{ x: 2, y: 0, w: 8, h: 5, static: true  }}
        >
          <Panel />
        </div>
      </RWDGrid>
    )
  }
}

Content.defaultProps = {
  breakpoints: {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0},
  cols: {lg: 12, md: 12, sm: 8, xs: 4, xxs: 2},
}

export default Content;
