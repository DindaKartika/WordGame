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
                    <h4>Created by:</h4>
                    <h4>Angga Dwi Apria Rifandi</h4>
                    <h4>Dinda Kartika Vilaili</h4>
                    <h4>Maestro Trastanechora</h4>
                </section>
            </div>
        );
    }
}

export default Credit;
