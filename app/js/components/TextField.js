'use strict';

import React, { PropTypes } from 'react';
import { Select, Button } from 'antd';

const Option = Select.Option;

class TextField extends React.Component {
  constructor(props) {
    super(props)
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
    let options = this.props.choice[this.props.label] || []

    return options.map(function(val, index) {
      return <Option key={index} value={val}>{val}</Option>
    })
  }
  
  render() {
    return (
      <Select 
        combobox
        size="large"
        style={{ width: this.props.width }}
        onSelect={(value, option) => {
          this.props.onChange(this.props.label, this.props.next, value)
        }}
        filterOption={false}>
        {this.getOptions()}
      </Select>
    )
  }
}

TextField.defaultProps = {
  width: "400px",
}

export default TextField
