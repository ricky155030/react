'use strict';

import { connect } from 'react-redux'
import { AddCounter, ChangeChoose, fetchKPIData } from '../actions'
import TextField from '../components/TextField.js'

const mapStateToProps = function(state) {
  return {
    choice: state.Modal.choice,
    selected: state.Modal.selected
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    onChange: function(curLabel, nextLabel, selected) {
      dispatch(fetchKPIData(nextLabel, selected))
    }
  }
}

const TextFieldContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TextField)

export default TextFieldContainer
