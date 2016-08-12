'use strict';

import { connect } from 'react-redux'
import { AddCounter, ChangeChoose } from '../actions'
import TextField from '../components/TextField.js'

const mapStateToProps = function(state) {
  return {
    number: state.counter,
    choose: state.choose
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    onClick: function() {
      dispatch(AddCounter())
    },
    onChange: function(value) {
      dispatch(ChangeChoose(value))
    }
  }
}

const TextFieldContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TextField)

export default TextFieldContainer
