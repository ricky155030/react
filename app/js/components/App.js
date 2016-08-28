'use strict';

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Grid, Row, Col } from 'react-flexbox-grid'

import Navigator from './Navigator'
import Heading from './Heading'

injectTapEventPlugin();

class Main extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Navigator />
          <Heading 
            style={{ marginTop: '-700px', marginBottom: '20px' }}
          />
          <Grid>
            <Row>
              <Col lg={12} md={12} sm={12} xs={12} style={{ marginBottom: '20px' }}>
                {this.props.children}
              </Col>
            </Row>
          </Grid>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Main;
