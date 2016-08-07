'use strict';

import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Select, Modal, Form, Button, Input, Tag, Card } from 'antd';

const Option = Select.Option;
const FormItem = Form.Item;

class AutoComplete extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      option: this.props.option,
      choose: ''
    }
  }
  handleChange(value) {
    var option = this.props.option.filter(function(val) {
      if(!val)
        return false;
      return val.indexOf(value) >= 0 ? true : false;
    });

    // Due to setState is async func. need callback to make sure the data consistency
    this.setState({ option: option, choose: value }, function() {
      console.log(this.state.choose);
      this.props.notify()
    });
  }

  getOptions() {
    return this.state.option.map(function(val, index) {
      return <Option key={index} value={val}>{val}</Option>
    })
  }

  render() {
    return (
      <Select 
        combobox
        size="large"
        style={{ width: this.props.width }}
        onChange={this.handleChange.bind(this)}
        filterOption={false}>
        {this.getOptions()}
      </Select>
    )
  }
}

AutoComplete.defaultProps = {
  width: "400px",
  option: ['https://i.kinja-img.com/gawker-media/image/upload/unnbgkdbmsszmazgxkmr.jpg', '312', '1234566', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
}

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
          label="Database">
          <AutoComplete
            ref="database"
            notify={this.notify.bind(this)}
          />
        </FormItem>
        <FormItem 
          {...formItemLayout}
          label="Category">
          <AutoComplete 
            ref="category"
            notify={this.notify.bind(this)}
          />
        </FormItem>
        <FormItem 
          {...formItemLayout}
          label="KPI-1">
          <AutoComplete
            ref="kpi1"
            notify={this.notify.bind(this)}
          />
        </FormItem>
        <FormItem 
          {...formItemLayout}
          label="KPI-2">
          <AutoComplete
            ref="kpi2"
            notify={this.notify.bind(this)}
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
