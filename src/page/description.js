import React, { Component } from "react";
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import { Link } from 'react-router-dom';

import "./../css/bootstrap.min.css";
import "./../css/index.css";

import DescriptionContent from './../component/descriptionContent.js'

const urlBasic = 'https://cors-anywhere.herokuapp.com/https://owlbot.info/api/v2/dictionary/';

class Blog extends Component {
  constructor(props){
    super(props);
    this.state = {
      descriptionContent: [],
      username: "",
      is_Login: false
    }
  }

  componentDidMount = () =>{
    const vocab = this.props.location.pathname.slice(13)
    const urlSearch = urlBasic + vocab
    console.log(urlSearch)
    const self = this;
    axios
      .get(urlSearch)
      .then(function(response){
        self.setState({descriptionContent: response.data});
        console.log(response.data);
      })
      .catch(function(error){
        console.log(error);
      })
  }

  render() {
    const {descriptionContent, username, is_Login} = this.state;

      return (
        <div class="description">
            <h1 class="descriptionTitle">{this.props.location.pathname.slice(13)}</h1>
            <hr/>
            {descriptionContent.map((item, key) => {
                return <DescriptionContent key ={key} type={item.type} definition={item.definition} example={item.example}/>;
            })}
            <div className="linkToNextQ">
              <div className="row">
                <div className="col-6">
                  {/* <Link to="/question"> */}
                    <button className="descriptionbutton">Back</button>
                  {/* </Link> */}
                </div>
                <div className="col-6">
                  {/* <Link to="/question"> */}
                    <button className="descriptionbutton">Next</button>
                  {/* </Link> */}
                </div>
              </div>
            
            </div>
        </div>
      );
  }
}

export default Blog;