'use strict';

import React, { PropTypes } from 'react';
import { Select, Button } from 'antd';

class Panel extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      open: false,
    }
  }

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
          onClick={() => {
            this.props.modalShow(true)
          }}
          style={{ marginLeft: '5px' }}>
          Open Modal
        </Button>
        <Button 
          size="large"
          onClick={() => {
            this.props.modalShow(false)
          }}
          style={{ marginLeft: '5px' }}>
          Close Modal
        </Button>
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

Panel.propTypes = {
  visibility: PropTypes.bool.isRequired,
  modalShow: PropTypes.func.isRequired
}

export default Panel
