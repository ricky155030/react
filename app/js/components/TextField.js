'use strict';

import React, { PropTypes } from 'react';
import { Select, Button } from 'antd';

const Option = Select.Option;

class TextField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      option: this.props.option,
    }
  }

  // handleChange(value) {
  //   var option = this.props.option.filter(function(val) {
  //     if(!val)
  //       return false;
  //     return val.indexOf(value) >= 0 ? true : false;
  //   });

  //   // Due to setState is async func. need callback to make sure the data consistency
  //   this.setState({ option: option, choose: value }, function() {
  //     console.log(this.state.choose);
  //     this.props.notify()
  //   });
  // }

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
        onChange={this.props.onChange}
        onClick={this.props.onClick}
        filterOption={false}>
        {this.getOptions()}
      </Select>
    )
  }
}

TextField.defaultProps = {
  width: "400px",
  option: ['https://i.kinja-img.com/gawker-media/image/upload/unnbgkdbmsszmazgxkmr.jpg', '312', '1234566', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
}

export default TextField
