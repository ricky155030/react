'use strict';

import { connect } from 'react-redux'
import { SetModalVisibility } from '../actions'
import Panel from '../components/Panel'

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

const PanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Panel)

export default PanelContainer
