'use strict';

import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <List>
        <ListItem primaryText="Inbox" />
        <ListItem primaryText="Starred" />
        <ListItem primaryText="Sent mail" />
        <ListItem primaryText="Drafts" />
        <ListItem primaryText="Inbox" />
      </List>,
      <Divider />,
      <List>
        <ListItem primaryText="All mail" />
        <ListItem primaryText="Trash" />
        <ListItem primaryText="Spam" />
        <ListItem primaryText="Follow up" />
      </List>
    )
  }
}

export default Sidebar
