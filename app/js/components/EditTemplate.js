'use strict';

import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import { Card, CardText } from 'material-ui/Card';
import { grey500 } from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import { Tab, Tabs } from 'material-ui/Tabs';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';
import RaisedButton from 'material-ui/RaisedButton';

class EditTemplate extends React.Component {
  constructor(props) {
    super(props) 
    console.log(this.props)
    this.state = {
      textareaVal: '',
      id: -1
    }
  }

  componentDidMount() {
    console.log('Load template data here')
    this.props.router.setRouteLeaveHook(this.props.route, () => {
      return this.confirmRouteLeave()
    })
    this.setState({
      id: this.props.routeParams.id
    })
  }

  confirmRouteLeave() {
    return confirm("尚未儲存 確定離開？")
  }
  
  uploadImage(image) {
    let data = new FormData()
    data.append('image', image, 'undefined.png')

    return fetch('http://localhost:3000/api/upload', {
               method: 'POST',
               body: data
             })
             .then((response) => {
               return response.json()
             })
             .then((json) => {
               var textareaElement = this.refs.textarea.input.refs.input
               var insertText = '![](http://localhost:3000/api/image/' + json.filename + ')\n'
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
      <Card>
        <Toolbar>
          <ToolbarGroup>
            <ToolbarTitle
              text={"Edit SOP - " + this.state.id}
            />
          </ToolbarGroup>
        </Toolbar>
        <CardText>
          <Tabs
            tabItemContainerStyle={{ backgroundColor: grey500 }}
            inkBarStyle={{ backgroundColor: '#FFF', marginTop: '-5px' }}
          >
            <Tab 
              label="Edit"
            >
              <div>
                <TextField
                  id="textarea"
                  ref="textarea"
                  value={this.state.textareaVal}
                  multiLine={true}
                  rowsMax={100}
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
                />
              </div>
            </Tab>
            <Tab 
              label="Live Preview" 
              style={{ height: '36px', lineHeight: '36px' }}
            >
              <ReactMarkdown
                source={this.state.textareaVal}
                renderers={Object.assign({}, ReactMarkdown.renderers, {
                  CodeBlock,
                })}
              />
            </Tab>
          </Tabs>
        </CardText>
        <CardText
          style={{ textAlign: 'right' }}
        >
          <RaisedButton
            label="Save"
          />
        </CardText>
      </Card>
    )
  }
}

export default EditTemplate
