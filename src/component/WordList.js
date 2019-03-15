import React, {Component} from "react";
import WordItem from "./WordItem";

class WordList extends Component{
    render(){
        const listWords = this.props.listWords;
        console.log(listWords);
        return(
            <div className="row mx-0">
                {listWords.map((item,key) => {
                    const word = item.word;
                    const score = item.score;
                    return <WordItem key={key} stage ={this.props.stage} word={word} score={score} />
                })}
            </div>
        )
    }
}

export default WordList