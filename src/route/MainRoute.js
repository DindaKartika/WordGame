import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './../page/home.js'


const MainRoute = () =>{
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
        </Switch>
    )
}


export default MainRoute;