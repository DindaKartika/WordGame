import React, { Component } from 'react';
import '../css/bootstrap.min.css';
import '../css/index.css';
import { connect } from "unistore/react";
import { actions } from '../store';
import { withRouter } from "react-router-dom";

class Login extends Component {
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
              <strong>LOGIN</strong>
              <div>
                <label for="username" className="form-label">Email address: </label>
                <input type="text" id="username" name="username" placeholder="Username" onChange={e => this.props.setField(e)} className="form-control" />
              </div>
              <div>
                <label for="pw" className="form-label">Password: </label>
                <input type="password" id="pw" name="password" placeholder="Password" onChange={e => this.props.setField(e)} className="form-control" />
              </div>
              <button onClick={() => this.doLogin()} className="btn btn-success">Signin</button>
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
(withRouter(Login));