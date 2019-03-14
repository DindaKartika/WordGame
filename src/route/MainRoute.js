// LIST IMPORT MODULE
import React, { Component } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { withRouter } from "react-router-dom";
import { actions } from '../store';

import Login from '../page/Login';

// LIST IMPORT COMPONENT


// MAIN CLASS
class MainRoute extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        {/* <Route path="/:query" component={Notfound} /> */}
      </Switch>
    );
  }
}

// EXPORT THE MAIN CLASS
export default MainRoute;
