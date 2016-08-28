'use strict';

import React from 'react';
import { Router, Route, IndexRoute, withRouter, Link, browserHistory} from 'react-router'

import App from './App'
import SOPList from './SOPList'
import EditTemplate from './EditTemplate'
import SOPView from './SOPView'

class Routing extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="/list" component={withRouter(SOPList)} />
          <Route path="/edit/:id" component={withRouter(EditTemplate)} />
          <Route path="/view/:id" component={withRouter(SOPView)} />
        </Route>
      </Router>
    )
  }
}

export default Routing;
