import React, {Component} from "react";
import axios from "axios";
import '../css/bootstrap.min.css';
import '../css/index.css';
import WordItem from "../component/WordItem";

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
    // componentDidMount () {
    //     const script = document.createElement("script");

    //     script.src = "../js/style.js";
    //     script.async = true;

    //     document.body.appendChild(script);
    // }

    render(){
        return(
            <div className="list-option-answer">
                {/* <WordList listWords={this.state.listWords}/> */}
                <div className="row item-wrapperz justify-content-center key-word">
                    <div className="col-10">
                        <div className="container test">Concatenate</div>
                    </div>
                </div>
                <div className="row item-wrapperz">
                    {/* <div className="col-6 option-item">
                        <div className="container box-item btn btn-outline-dark">MAE</div>
                    </div>
                    <div className="col-6 option-item">
                        <div className="container box-item btn btn-outline-dark">MAE</div>
                    </div>
                    <div className="col-6 option-item">
                        <div className="container box-item btn btn-outline-dark">MAE</div>
                    </div>
                    <div className="col-6 option-item">
                        <div className="container box-item btn btn-outline-dark">MAE</div>
                    </div>
                    <div className="col-6 option-item">
                        <div className="container box-item btn btn-outline-dark">MAE</div>
                    </div>
                    <div className="col-6 option-item">
                        <div className="container box-item btn btn-outline-dark">MAE</div>
                    </div> */}
                    {/* <div className="col-6 option-item"> */}
                    {this.state.listWords.slice(0, 6).map((item,key) => {
                        const word = item.word;
                        const score = item.score;
                        return <WordItem key={key} word={word} score={score} />
                    })}
                    {/* </div> */}
                </div>
            </div>
        )
    }
}

export default Question