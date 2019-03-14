<<<<<<< HEAD
import React from "react";
import { Route, Switch } from "react-router-dom";

import Question from "../page/Question"
// import NotFound from "../pages/NotFound";

const MainRoute = () => {
    return (
        <Switch>
            <Route path="/" component = {Question}/>
=======
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Profile from './../page/profile.js'
import Home from './../page/home.js'
import Login from '../page/Login';


const MainRoute = () =>{
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/login" component={Login} />
>>>>>>> dev
        </Switch>
    )
}

<<<<<<< HEAD
export default MainRoute;
=======

// EXPORT THE MAIN CLASS
export default MainRoute;
>>>>>>> dev
