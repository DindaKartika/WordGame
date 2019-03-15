import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./../css/bootstrap.min.css";
import "./../css/index.css";

const DescriptionContent = props => {
    return(
        <div className="isiblogs">
            <h5>{props.type}</h5>
            <label>{props.definition}</label>
            <br/>
            <label>Example : {props.example}</label>
        </div>
    )
}

DescriptionContent.propTypes = {
    type : PropTypes.string.isRequired,
    definition : PropTypes.string.isRequired,
    example : PropTypes.string.isRequired
}

export default DescriptionContent