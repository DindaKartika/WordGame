import React, {Component} from "react";
import axios from "axios";
import WordList from "./WordList";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { store } from "../store";

const similarWordUrl = "http://api.datamuse.com/words?ml="
const randomWordUrl = "https://random-word-api.herokuapp.com/word?key=7PFKNZXE&number="
class Question extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentIdx : 0,
        }
    }
    changeQuestion(currentIdx){
        this.setState({currentIdx: this.state.currentIdx + 1, active: false})
        store.setState({result_stage: false, reset_local: true})
        if (currentIdx === 9){
            this.props.history.push("/result")
        }
    }
    render(){
        const curIdx = this.state.currentIdx
        return(
            <div className="border shadow m-0 px-2 py-5 bg-light rounded-lg" >
                <h1 className="text-center">{curIdx + 1} {this.props.listKeyWords[curIdx]}</h1>
                <WordList className="text-center" listWords={this.props.listWords.slice(curIdx * 6, (curIdx + 1) * 6)}/>
                <a className="btn btn-success" onClick={() => this.changeQuestion(curIdx)}>Next</a>
            </div>
        )
    }
}

// export default Question
export default connect("listWords, listKeyWords",actions)(withRouter(Question))