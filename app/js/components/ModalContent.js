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
            label="KPI-2">
            <TextFieldContainer
            />
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
