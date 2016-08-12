'use strict';

import { connect } from 'react-redux'
import { SetModalVisibility } from '../actions'
import SMCModal from '../components/SMCModal'

const mapStateToProps = function(state) {
  return {
    visibility: state.Modal.visibility
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    modalShow: function(value) {
      dispatch(SetModalVisibility(value))
    }
  }
}

const SMCModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SMCModal)

export default SMCModalContainer
