'use strict';

import React from 'react';
import TextFieldContainer from '../containers/TextFieldContainer.js'
import TextField from './TextField.js'
import { Select, Modal, Form, Button, Input, Tag, Card } from 'antd';

const FormItem = Form.Item;

class SMCForm extends React.Component {
  constructor(props) {
    super(props)
  }

  notify() {
    var previewUrl = "http://"
      + this.refs.database.state.choose 
      + this.refs.category.state.choose 
      + this.refs.kpi1.state.choose 
      + this.refs.kpi2.state.choose;

    this.props.onChange(previewUrl);
    console.log(previewUrl)
  }

  render() {
    const formItemLayout = {
      labelCol: { span: 3 },
      wrapperCol: { span: 16 }
    };
    return (
      <Form form={this.props.form}>
        <FormItem 
          {...formItemLayout}
          label="KPI-2">
          <TextFieldContainer
          />
        </FormItem>
      </Form>
    )
  }
}

class Panel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  handleOpen() {
    this.setState({visible: true});
  };

  handleClose() {
    this.setState({visible: false});
  };

  getPreviewUrl(url) {
    this.setState({
      previewUrl: url
    })
  }

  render() {
    return (
      <div style={this.props.style}>
        <Select size="large" style={{ width: 200 }}>
          <Option value="Never">Never</Option>
          <Option value="Every Night">Every Night</Option>
          <Option value="Weeknights">Weeknights</Option>
          <Option value="Weekends">Weekends</Option>
          <Option value="Weekly">Weekly</Option>
        </Select>
        <Button 
          type="primary" 
          size="large"
          onClick={this.handleOpen.bind(this)}
          style={{ marginLeft: '5px' }}>
          Add a chart to this profile
        </Button>
        <Button 
          size="large"
          onClick={this.handleOpen.bind(this)}
          style={{ marginLeft: '5px' }}>
          New Profile
        </Button>
        <Modal
          visible={this.state.visible}
          title="New SMC Performance Chart"
          onOk={this.handleClose.bind(this)}
          onClose={this.handleClose.bind(this)}
          okText="Add"
          cancelText="Cancel">
          <SMCForm ref="form" onChange={this.getPreviewUrl.bind(this)}/>
          <Card style={{ width: '100%' }} bodyStyle={{ padding: 0 }}>
            <div className="custom-image">
              <img width="100%" src={this.state.previewUrl}/>
            </div>
          </Card>
        </Modal>
      </div>
    )
  }
}

Panel.defaultProps = {
  style: {
    width: '60%',
    maxWidth: 'none'
  }
}

Panel = Form.create()(Panel);
export default Panel;
