import React, {Component} from "react";
import axios from "axios";
import WordList from "../component/WordList";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

const similarWordUrl = "http://api.datamuse.com/words?ml="
const randomWordUrl = "https://random-word-api.herokuapp.com/word?key=7PFKNZXE&number="
class Question extends Component{
    
    render(){
        return(
            <form className="border shadow m-0 px-2 py-5 bg-success text-light rounded-lg" >
                <h1 className="text-center">{this.props.listKeyWords[0]}</h1>
                <WordList className="text-center" stage={0} listWords={this.props.listWords.slice(0, 6)}/>
                <h1 className="text-center">{this.props.listKeyWords[1]}</h1>
                <WordList className="text-center" stage={1} listWords={this.props.listWords.slice(6, 12)}/>
                <h1 className="text-center">{this.props.listKeyWords[2]}</h1>
                <WordList className="text-center" stage={2} listWords={this.props.listWords.slice(12, 18)}/>
                <h1 className="text-center">{this.props.listKeyWords[3]}</h1>
                <WordList className="text-center" stage={3} listWords={this.props.listWords.slice(18, 24)}/>
                <h1 className="text-center">{this.props.listKeyWords[4]}</h1>
                <WordList className="text-center" stage={4} listWords={this.props.listWords.slice(24, 30)}/>
                <h1 className="text-center">{this.props.listKeyWords[5]}</h1>
                <WordList className="text-center" stage={5} listWords={this.props.listWords.slice(30, 36)}/>
                <h1 className="text-center">{this.props.listKeyWords[6]}</h1>
                <WordList className="text-center" stage={6} listWords={this.props.listWords.slice(36, 42)}/>
                <h1 className="text-center">{this.props.listKeyWords[7]}</h1>
                <WordList className="text-center" stage={7} listWords={this.props.listWords.slice(42, 48)}/>
                <h1 className="text-center">{this.props.listKeyWords[8]}</h1>
                <WordList className="text-center" stage={8} listWords={this.props.listWords.slice(48, 54)}/>
                <h1 className="text-center">{this.props.listKeyWords[9]}</h1>
                <WordList className="text-center" stage={9} listWords={this.props.listWords.slice(54, 60)}/>
            </form>
        )
    }
}

// export default Question
export default connect("listWords, listKeyWords",actions)(withRouter(Question))