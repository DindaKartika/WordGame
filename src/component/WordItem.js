import React, {Component} from "react";

class WordItem extends Component{
    render(){
        return(
            <div className="row justify-content-center">
                <div className="col-12 col-md-8">
                    <h5>{this.props.word} : {this.props.score}</h5>
                </div>
            </div>
        )
    }
}

export default WordItem