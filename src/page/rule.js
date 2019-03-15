import React, { Component } from "react";
import "./../css/bootstrap.min.css";
import { Link } from 'react-router-dom';
// import "./../css/main.css";

class Rule extends Component {
    render() {
        return (
            <div className="rule">
                <section>
                <h4 className="titlerule">How to play:</h4>
                    <h5>You only have 3 opportunities to answer</h5>
                    <h5>Choose all words similar to the word above</h5>
                    <h5>Every true answer will give you more points</h5>
                    <h5>Check the definition of the word</h5>
                    <h5>Have fun!</h5>
                    <Link to="/question">
                        <button className="buttonrule">Start</button>
                    </Link>
                </section>
            </div>
        );
    }
}

export default Rule;
