import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
// import{Link} from 'react-router-dom';
import "./../css/bootstrap.min.css";
import "./../css/index.css";

class Result extends Component {

    componentWillMount(){
        localStorage.setItem('last_played', new Date())
        if (localStorage.getItem('score') > localStorage.getItem('highest_score')){
            localStorage.setItem('highest_score', localStorage.getItem('score'))
            localStorage.setItem('score', 0)
        }
        const nilaiSekarang = localStorage.getItem('score')
        const nilaiTertinggi = localStorage.getItem('highest_score')
    }

  render() {
    return (
      <div className="rule">
        <section>
            <div className="row">
                <div className="col-md-12">
                    <div className="userProfile">
                        <h2 className="title">Game Over</h2>
                        <label>Score: {localStorage.getItem('score')}</label>
                        <br/>
                        <label>Highest Score: {localStorage.getItem('highest_score')}</label>
                        <br/>
                    </div>
                </div>
            </div>
            {/* <Link to="/"> */}
                <button className="profilebutton">Exit</button>
            {/* </Link> */}
        </section>
      </div>
    );
  }
}

export default withRouter(Result);
