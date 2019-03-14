import React, { Component } from "react";
import "./../css/bootstrap.min.css";
import { Link } from 'react-router-dom';
// import "./../css/main.css";

class Credit extends Component {
    render() {
        return (
            <div className="credit">
                <section>
                    <h2 className="title">Word Game</h2>
                    <label>Created by:</label>
                    <br/>
                    <label>Angga Dwi Apria Rifandi</label>
                    <br/>
                    <label>Dinda Kartika Vilaili</label>
                    <br/>
                    <label>Maestro Trastanechora</label>
                </section>
            </div>
        );
    }
}

export default Credit;
