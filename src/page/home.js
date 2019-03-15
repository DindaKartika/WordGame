import React, { Component } from "react";
import "./../css/bootstrap.min.css";
import { Link } from 'react-router-dom';
// import "./../css/main.css";

class Home extends Component {
    render() {
        return (
            <div className="home">
                <section>
                    <div className="row">
                        <div className="col-12">
                            <h1 className="title">WORD GAMES</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <Link to="/rule">
                                <button className="homebutton">Play</button>
                            </Link>
                        </div>
                        <div className="col-lg-4">
                            <Link to="/credit">
                                <button className="homebutton">Credit</button>
                            </Link>
                        </div>
                        <div className="col-lg-4">
                            <Link to="/profile">
                                <button className="homebutton">Profile</button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;
