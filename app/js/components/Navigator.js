'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton/IconButton';

const menuItemStyle = {
  fontSize: '14px',
  height: '30px',
  lineHeight: '30px'
}

const elementRight = (
  <div>
    <IconMenu
      iconButtonElement={
        <FontIcon 
          className="material-icons" 
          style={{ cursor: 'pointer', color: 'white' }}
        >
          settings
        </FontIcon>
      }        
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
      style={{ marginRight: '20px' }}
    >
      <MenuItem style={menuItemStyle} innerDivStyle={{ padding: '0px 10px' }} primaryText="New template" />
      <MenuItem style={menuItemStyle} innerDivStyle={{ padding: '0px 10px' }} primaryText="Modify template" />
    </IconMenu>
    <FontIcon 
      className="material-icons" 
      style={{ cursor: 'pointer', color: 'white' }}
    >
      info
    </FontIcon>
  </div>
)

const info = (
  <Dialog
  >
    Discard draft?
  </Dialog>   
)

class Navigator extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <AppBar
        title="SOP Generator"
        showMenuIconButton={false}
        style={{ height: '50px', lineHeight: '50px' }}
        titleStyle={{ fontSize: '20px', lineHeight: '50px', fontWeight: 300 }}
        iconElementRight={elementRight}
        iconStyleRight={{ marginTop: '6px', marginRight: '0' }}
      >
      </AppBar>
    )
  }
}

export default Navigator
