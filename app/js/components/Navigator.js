'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import IconInfo from 'material-ui/svg-icons/action/info';
import IconSettings from 'material-ui/svg-icons/action/settings';
import { red300 } from 'material-ui/styles/colors';

const menuItemStyle = {
  fontSize: '14px',
  height: '30px',
  lineHeight: '30px'
}

const elementRight = (
  <div>
    <IconSettings color="#FFF" style={{ marginRight: '20px' }} />
    <IconInfo color="#FFF" />
  </div>
)

class Navigator extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <AppBar
        title="TiCC"
        showMenuIconButton={false}
        style={{ height: '800px', lineHeight: '50px', backgroundImage: "url('http://blackrockdigital.github.io/startbootstrap-landing-page/img/intro-bg.jpg')", boxShadow: 'none', zIndex: -1 }}
        titleStyle={{ fontSize: '20px', height: '50px', lineHeight: '50px', fontWeight: 300 }}
        iconElementRight={elementRight}
        iconStyleRight={{ marginTop: '6px', marginRight: '0' }}
      >
      </AppBar>
    )
  }
}

export default Navigator
