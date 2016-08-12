'use strict';

import React, { PropTypes } from 'react';
import ModalContent from './ModalContent';
import { Modal } from 'antd';

class SMCModal extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Modal
        visible={this.props.visibility}
        title="New SMC Performance Chart"
        onCancel={() => {
          this.props.modalShow(false)
        }}
        onOk={() => {
          this.props.modalShow(false)
        }}
        okText="Add"
        cancelText="Cancel">
        <ModalContent />
      </Modal>
    )
  }
}

SMCModal.defaultProps = {
  style: {
    width: '60%',
    maxWidth: 'none'
  }
}

SMCModal.propTypes = {
  visibility: PropTypes.bool.isRequired,
  modalShow: PropTypes.func.isRequired
}

export default SMCModal;
