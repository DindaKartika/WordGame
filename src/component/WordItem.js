import React, {Component} from "react";
import { connect } from "unistore/react";
import { actions } from '../store'
import { withRouter } from "react-router-dom";
import {store} from '../store'

class WordItem extends Component{
    state = {
        classvalue: "container box-item btn btn-outline-dark",
        active: false
    }
    async makeActive(score){
        if (!this.state.active) {
            if (this.props.choosen < 3) {
                await this.setState({classvalue: "container box-item btn btn-outline-dark active", active: !this.state.active})
                store.setState({choosen: this.props.choosen + 1, totalScore: this.props.totalScore + score})
            }
        } else {
            await this.setState({classvalue: "container box-item btn btn-outline-dark", active: !this.state.active})
            store.setState({choosen: this.props.choosen - 1, totalScore: this.props.totalScore - score})
        }
        console.log(this.props.totalScore)
    }
    render(){
        return(
            <div className="col-6 option-item">
                <div className={this.state.classvalue} onClick={() => this.makeActive(this.props.score)}>{this.props.word}</div>
            </div>
        )
    }
}

// export default WordItem
export default connect(
    "choosen, totalScore", actions)
(withRouter(WordItem));