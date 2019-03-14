import React, {Component} from "react";
import axios from "axios";
import WordList from "../component/WordList";

const similarWordUrl = "http://api.datamuse.com/words?ml="

class Question extends Component{
    constructor(props){
        super(props);
        this.state = {
            listWords : [],
        }
    }

    componentDidMount(){
        this.getWords("concatenate")
    }
    getWords(value){
        console.log("value: " + value)
        const self = this;
        axios
        .get(similarWordUrl+value)
        .then(function(response){
            console.log(response.data)
            self.setState({listWords:response.data})
        })
        .catch(function(error){
            console.log(error)
        })
    }
    render(){
        return(
            <div>
                <WordList listWords={this.state.listWords}/>
            </div>
        )
    }
}

export default Question