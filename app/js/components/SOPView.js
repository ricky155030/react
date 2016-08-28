'use strict';

import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import { Card, CardText } from 'material-ui/Card';
import { grey500 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton/IconButton';
import IconDelete from 'material-ui/svg-icons/action/delete';
import IconEdit from 'material-ui/svg-icons/editor/mode-edit';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

class EditTemplate extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      id: -1,
      dialogOpen: false,
      dialogOnClose: function(){}
    }
  }

  componentDidMount() {
    this.setState({
      id: this.props.routeParams.id
    })
  }

  deleteSop(decision) {
    console.log('test')
    if(decision) {
      console.log('Delete SOP No.' + this.state.id)
      this.props.router.push('/list');
    }
  } 

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Discard"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <Card>
          <Toolbar>
            <ToolbarGroup>
              <ToolbarTitle
                text={"SOP - " + this.state.id}
              />
            </ToolbarGroup>
            <ToolbarGroup>
              <IconButton
                style={{ height: 'inherit' }}
                onClick={() => {
                  this.props.router.push('/edit/' + this.state.id);
                }}
              > 
                <IconEdit color={grey500} />
              </IconButton> 
              <IconButton
                style={{ height: 'inherit' }}
                onClick={(e) => {
                  console.log(this.deleteSop)
                  this.setState({
                    dialogOpen: true,
                    dialogOnClose: this.deleteSop
                  })
                  console.log(this.state)
                }}
              > 
                <IconDelete color={grey500} />
              </IconButton> 
            </ToolbarGroup>
          </Toolbar>
          <CardText>
          </CardText>
        </Card>
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.dialogOpen}
          onRequestClose={(decision) => {
            console.log(decision)
            this.dialogOnClose(decision)
          }}
        >
          Discard draft?
        </Dialog>
      </div>
    )
  }
}

export default EditTemplate
