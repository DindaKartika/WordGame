import React, {Component} from "react";
import { connect } from "unistore/react";
import { actions } from '../store'
import { withRouter } from "react-router-dom";
import {store} from '../store'

class WordItem extends Component{
    state = {
        classvalue: "container box-item btn btn-outline-dark shadow-lg",
        active: false,
    }
    async makeActive(stage, score){
        if (!this.state.active) {
            if (this.props.choosen < 30) {
                await this.setState({classvalue: "container box-item btn btn-outline-dark active shadow-lg", active: !this.state.active})
                store.setState({choosen: this.props.choosen + 1, totalScore: this.props.totalScore + score})
            }
        } else {
            await this.setState({classvalue: "container box-item btn btn-outline-dark shadow-lg", active: !this.state.active})
            store.setState({choosen: this.props.choosen - 1, totalScore: this.props.totalScore - score})
        }
        if(this.props.choosen === 30) {
            alert("Are You Sure?")
        }
        console.log(this.props.totalScore)
    }
      
    render(){

        return(
            <div className="col-6 col-md-4 mx-0 my-1 p-1">
                <a onClick={() => this.makeActive(this.props.stage, this.props.score)} className={this.state.classvalue}>{this.props.word}</a>
            </div>
        )
    }
}

// export default WordItem
export default connect(
    "choosen, totalScore", actions)
(withRouter(WordItem));