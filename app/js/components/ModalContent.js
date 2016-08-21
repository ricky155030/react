'use strict';

import React from 'react';
import TextFieldContainer from '../containers/TextFieldContainer.js'
import { Form, Card } from 'antd';

const FormItem = Form.Item;

class ModalContent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const formItemLayout = {
      labelCol: { span: 3 },
      wrapperCol: { span: 16 }
    };
    return (
      <div>
        <Form form={this.props.form}>
          <FormItem 
            {...formItemLayout}
            label="Database">
            <TextFieldContainer 
              label="database"
              next="kpi-1"/>
          </FormItem>
          <FormItem 
            {...formItemLayout}
            label="KPI-1">
            <TextFieldContainer
              label="kpi-1"
              next="kpi-2"/>
          </FormItem>
          <FormItem 
            {...formItemLayout}
            label="KPI-2">
            <TextFieldContainer
              label="kpi-2"
              next="period"/>
          </FormItem>
          <FormItem 
            {...formItemLayout}
            label="Period">
            <TextFieldContainer
              label="period"/>
          </FormItem>
        </Form>
        <Card style={{ width: '100%' }} bodyStyle={{ padding: 0 }}>
          <div className="custom-image">
            <img width="100%" />
          </div>
        </Card>
      </div>
    )
  }
}

export default ModalContent
