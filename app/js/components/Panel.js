'use strict';

import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import AppBar from 'material-ui/AppBar';
import { Card, CardHeader, CardText, CardTitle } from 'material-ui/Card';
import { grey700 } from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton/IconButton';
import ReactMarkdown from 'react-markdown';

const menuItemStyle = {
  fontSize: '14px',
  height: '30px',
  lineHeight: '30px'
}

const elementRight = (
  <div>
    <FontIcon 
      className="material-icons" 
      style={{ cursor: 'pointer', color: 'white', marginRight: '20px' }}
    >
      add_circle
    </FontIcon>
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
      style={{ cursor: 'pointer', color: 'white', marginRight: '20px' }}
    >
      info
    </FontIcon>
    <FontIcon 
      className="material-icons" 
      style={{ cursor: 'pointer', color: 'white' }}
    >
      edit
    </FontIcon>
  </div>
)

class Panel extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      imageUrl: '',
      status: '',
      textareaVal: ''
    }
  }

  uploadImage(image) {
    let data = new FormData()
    data.append('image', image, 'hello.png')

    return fetch('http://localhost:3000/upload', {
               method: 'POST',
               body: data
             })
             .then((response) => {
               return response.json()
             })
             .then((json) => {
               var textareaElement = this.refs.textarea.input.refs.input
               var insertText = '![](http://localhost:3000/image/' + json.filename + ')\n'
               var begin = textareaElement.value.substr(0, textareaElement.selectionStart)
               var end = textareaElement.value.substr(textareaElement.selectionStart + 1, textareaElement.value.length)
               var cursorPos = textareaElement.selectionStart + insertText.length
               textareaElement.value = begin + insertText + end
               textareaElement.selectionStart = cursorPos - 1 
               textareaElement.selectionEnd = cursorPos - 1
               textareaElement.focus();
               this.setState({
                 textareaVal: textareaElement.value
               })
               return json
             })

  }

  render() {
    return (
      <Card
        style={{ height: '500px', marginTop: '-200px' }}
      >
        <Toolbar>
          <ToolbarGroup>
            <ToolbarTitle
              text="Add a template"
            />
          </ToolbarGroup>
        </Toolbar>
        <CardText>
          <TextField
            id="textarea"
            ref="textarea"
            value={this.state.textareaVal}
            multiLine={true}
            rowsMax={10}
            rows={10}
            fullWidth={true}
            onChange={(event) => {
              this.setState({
                textareaVal: event.target.value
              })
            }}
            onPaste={(event) => {
              let clipboardData = event.clipboardData;
              let item = clipboardData.items[0]
              console.log("kind:", item.kind, "type:", item.type, item.getAsString((s) => console.log(s)))
              if(item.kind == 'file' && item.type.indexOf('image') != -1) {
                this.uploadImage(item.getAsFile())
              }
            }}
          >
          </TextField>
        </CardText>
        <CardText>
          <ReactMarkdown
            source={this.state.textareaVal}
          />
        </CardText>
      </Card>
    )
  }
}

export default Panel
