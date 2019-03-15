import React, {Component} from "react";
import { connect } from "unistore/react";
import { actions } from '../store'
import { withRouter } from "react-router-dom";
import {store} from '../store'

class WordItem extends Component{
    state = {
        classvalue: "container box-item btn btn-outline-dark shadow-lg",
        active: false,
        resetting_index: 0
    }
    componentDidMount(){
        this.setState({active:false, classvalue: "container box-item btn btn-outline-dark shadow-lg"})
    }
    async makeActive(score){
        if (!this.state.active) {
            if (this.props.choosen < 3) {
                await this.setState({classvalue: "container box-item btn btn-outline-dark active shadow-lg", active: !this.state.active})
                store.setState({choosen: this.props.choosen + 1, totalScore: this.props.totalScore + score})
            }
        } else {
            await this.setState({classvalue: "container box-item btn btn-outline-dark shadow-lg", active: !this.state.active})
            store.setState({choosen: this.props.choosen - 1, totalScore: this.props.totalScore - score})
        }
        console.log(this.props.totalScore)
    }
    resetState() {
        console.log("testing reset")
        this.setState({
            classvalue: "container box-item btn btn-outline-dark",
            active: false,
        }, () => {
            if ( this.state.resetting_index < 6) {
                this.setState({resetting_index: this.state.resetting_index + 1})
            } else {
                this.setState({resetting_index: 0})
                store.setState({reset_local: false, choosen: 0})
            }
        })
    }
    render(){
        // console.log("cek resetLocal", this.props.reset_local)
        // console.log("cek score", this.props.score)
        if (this.props.reset_local == true){
            this.resetState()
        }
        if (this.props.result_stage == false) {
            // console.log("state active", this.state)
            return(
                <div className="col-6 col-md-4 mx-0 my-1 p-1">
                    <div className={this.state.classvalue} onClick={() => this.makeActive(this.props.score)}>{this.props.word}</div>
                </div>
            )
        } else {
            console.log("state reveal", this.state)
            return(
                <div className="col-6 col-md-4 mx-0 my-1 p-1">
                    <div className={this.state.classvalue} onClick={() => this.revealAnswer()}>{this.props.word}</div>
                </div>
            )
        }        
        // return(
        //     <div className="col-6 col-md-4 mx-0 my-1 p-1">
        //         <a onClick={() => this.makeActive(this.props.stage, this.props.score)} className={this.state.classvalue}>{this.props.word}</a>
        //     </div>
        // )
    }
}

// export default WordItem
export default connect(
    "choosen, totalScore, result_stage, reset_local", actions)
(withRouter(WordItem));