import React, {Component} from "react";
import axios from "axios";
import WordList from "../component/WordList";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { store } from "../store";
import logo from "../logo.svg"
import "../App.css"

const similarWordUrl = "http://api.datamuse.com/words?ml="
const randomWordUrl = "https://random-word-api.herokuapp.com/word?key=7PFKNZXE&number="
class GetWords extends Component{

    async componentDidMount(){
        await this.getRandomWords(10)
        console.log("keyword",this.props.listKeyWords)
        for(let i = 0; i < 10; i++){
            await this.getWords(this.props.listKeyWords[i])
        }
        console.log("kabeh:",this.props.listWords)
        this.props.history.push("/question")
    }

    async getRandomWords(number){
        const self = this;
        await axios
        .get(randomWordUrl+number)
        .then(function(response){
            console.log("random",response.data)
            const keyWordList = response.data
            store.setState({listKeyWords:keyWordList})
            console.log("keywords",self.props.listKeyWords)
        })
        .catch(function(error){
            console.log(error)
        })
    }
    async getRandomFalseWords(number){
        const self = this;
        await axios
        .get(randomWordUrl+number)
        .then(function(response){
            console.log("random fls",response.data)
            const falseWordList = response.data
            store.setState({listFalseWords:falseWordList})
            console.log("keywords",self.props.listKeyWords)
        })
        .catch(function(error){
            console.log(error)
        })
    }
    async getWords(word){
        console.log("word: " + word)
        const self = this;
        await axios
        .get(similarWordUrl+word)
        .then(async function(response){
            // console.log(response.data)
            const rightWord = response.data.slice(0,3)
            await self.getRandomFalseWords(3)
            const falseWord = self.props.listFalseWords
            // console.log("fls",falseWord)
            var falseWordList = []
            for (let i = 0; i < 3; i++){
                falseWordList.push({word:falseWord[i], score: -30000})
            }
            console.log("ffff",falseWordList)
            var answerList = rightWord.concat(falseWordList)
            answerList = self.shuffle(answerList)
            console.log("jwb",answerList)
            store.setState({listWords:[...self.props.listWords, ...answerList]})
            console.log("kbh", self.props.listWords)
        })
        .catch(function(error){
            console.log(error)
        })
    }
    
    shuffle(array) {
        var m = array.length, t, i;
        // While there remain elements to shuffle…
        while (m) {
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);
            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        return array;
    }
    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p className="text-center Loading">
                        Loading data
                    </p>
                </header>
            </div>
        )
    }
}

// export default Question
export default connect("listWords, listFalseWords, listKeyWords",actions)(withRouter(GetWords))