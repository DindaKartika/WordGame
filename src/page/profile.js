import React, { Component } from "react";
// import{Link} from 'react-router-dom';
import "./../css/bootstrap.min.css";
import "./../css/index.css";
import { Link } from 'react-router-dom';

class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <section>
            <div className="row">
                <div className="col-md-12">
                    <div className="userProfile">
                        <h2 className="title">Profile</h2>
                        <label>Username:</label><label>Dinda</label>
                        <br/>
                        <label>Last Played:</label><label>2 Maret 2019</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <Link to="/">
                        <button className="profilebutton">Back</button>
                    </Link>
                </div>
                <div className="col-md-6">
                    <Link to="/rule">
                        <button className="profilebutton">Play</button>
                    </Link>
                </div>
            </div>
        </section>
      </div>
    );
  }
}

export default Profile;
