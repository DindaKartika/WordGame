import React, {Component} from "react";
import WordItem from "./WordItem";

class WordList extends Component{
    render(){
        const listWords = this.props.listWords;
        console.log(listWords);
        return(
            <div>
                {listWords.map((item,key) => {
                    const word = item.word;
                    const score = item.score;
                    return <WordItem key={key} word={word} score={score} />
                })}
            </div>
        )
    }
}

export default WordList