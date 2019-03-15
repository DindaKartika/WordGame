import React, { Component } from 'react';
import '../css/bootstrap.min.css';
import '../css/index.css';
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from '../store';
import { withRouter } from "react-router-dom";

class Notfound extends Component {
  doLogin = () => {
    this.props.postLogin().then(()=> {
        this.props.history.replace("/profile");
        // return <Redirect to={{ pathname: "/signin" }} />;
    });
  };

  render() {
    return (
      <div className="login-page">
        <div className="login-frame">
          <div className="container justify-content-center">
            <div className="login-form-wrapper">
              <strong>Page not found, sorry.</strong>
              <div>
              </div>
              {/* <button onClick={() => this.doLogin()} className="btn btn-success">OK</button> */}
              <Link to="/" className="btn btn-light">OK</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default Login;
export default connect(
  "is_login", actions)
(withRouter(Notfound));