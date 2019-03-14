import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Profile from './../page/profile.js'
import Home from './../page/home.js'
import Login from '../page/Login';
import Credit from './../page/credit'

const MainRoute = () =>{
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/credit" component={Credit}/>
        </Switch>
    )
}


// EXPORT THE MAIN CLASS
export default MainRoute;
