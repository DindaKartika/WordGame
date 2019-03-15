import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./../css/bootstrap.min.css";
import "./../css/index.css";
import{Link} from 'react-router-dom';


const ListOfWords = props => {
    return(
        <div className="isiblogs">
          <Link to="/description/{props.word}">
            <button className="descriptionbutton">{props.word}</button>
          </Link>
      </div>
    )
}

ListOfWords.propTypes = {
    word : PropTypes.string.isRequired
}

export default ListOfWords