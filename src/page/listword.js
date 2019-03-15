import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from '../store';

import{Link} from 'react-router-dom';
import ListOfWords from './../component/buttonlistword'
import "./../css/bootstrap.min.css";
import "./../css/index.css";

class ListWord extends Component {
    render() {
        const listAllKeyWord = this.props.listKeyWords;
        console.log(listAllKeyWord)
        // const listAllWord = this.props.listWords;
        return (
        <div className="rule">
            <div className="row">
                <div className="col-md-9">
                    {listAllKeyWord.map((item, key) => {
                        return <ListOfWords key ={key} word={item.word}/>
                    })}
                </div>
            </div> 
        </div>
        );
    }
}

export default connect("listKeyWords, listWords", actions)(withRouter(ListWord));