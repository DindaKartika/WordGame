import React, {Component} from "react";
import axios from "axios";
import WordList from "../component/WordList";
import QuestionItem from "../component/QuestionItem"
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

// const similarWordUrl = "http://api.datamuse.com/words?ml="
// const randomWordUrl = "https://random-word-api.herokuapp.com/word?key=G0WS22CI&number="
class Question extends Component{
    
    render(){
        return(
            <div>
                <QuestionItem/>
            </div>
        )
    }
}

// export default Question
export default connect("listWords, listKeyWords",actions)(withRouter(Question))