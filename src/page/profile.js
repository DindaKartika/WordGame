import React, { Component } from "react";
import {Redirect} from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from '../store';
import { withRouter } from "react-router-dom";
import 'react-datetime';

// import{Link} from 'react-router-dom';
import "./../css/bootstrap.min.css";
import "./../css/index.css";

today = new Date()

class Profile extends Component {
  render() {
    if(!this.props.is_login){
        return <Redirect to={{pathname:"/login"}}/>
    }
    else{
        return(
      <div className="profile">
        <section>
            <div className="row">
                <div className="col-md-12">
                    <div className="userProfile">
                        <h2 className="title">Profile</h2>
                        <label>Username: </label><label>{this.props.username}</label>
                        <br/>
                        <label>Last Played: </label><label>{today}</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    {/* <Link to="/"> */}
                        <button className="profilebutton">Back</button>
                    {/* </Link> */}
                </div>
                <div className="col-md-6">
                    {/* <Link to="/rule"> */}
                        <button className="profilebutton">Start</button>
                    {/* </Link> */}
                </div>
            </div>
        </section>
      </div>
    );
  }
}
}

export default connect("is_login, username", actions)(withRouter(Profile));
