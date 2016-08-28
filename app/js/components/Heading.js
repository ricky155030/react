'use strict';

import React from 'react';
import { Card, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router'

class Heading extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Card
        style={Object.assign({}, this.props.style, { background: 'transparent', boxShadow: 0, textAlign: 'center' })}
      >
        <CardText
          style={{ color: '#FFF', fontSize: '30px' }}
        >
          <h1>SOP Generator</h1>
          <Link to="/list">
            <FlatButton
              label="Choose SOP"
              style={{ color: '#FFF', borderWidth: '1px', borderColor: '#FFF', borderRadius: '5px', borderStyle: 'solid' }}
            />
          </Link>
        </CardText>
      </Card>
    )
  }
}

export default Heading;
