import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Profile from './../page/profile'
import Home from './../page/home'
import Login from '../page/Login';
import Credit from './../page/credit'
import Rule from './../page/rule'
import Notfound from '../page/Notfound';
import Question from '../page/Question';
import Result from '../page/result';

const MainRoute = () =>{
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/credit" component={Credit}/>
            <Route exact path="/rule" component={Rule}/>
            <Route exact path="/question" component={Question} />
            <Route exact path="/result" component={Result}/>
            <Route exact path="/:path" component={Notfound} />
            
        </Switch>
    )
}

// EXPORT THE MAIN CLASS
export default MainRoute;
