import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Profile from './../page/profile.js'

const MainRoute = () =>{
    return(
        <Switch>
            <Route exact path="/profile" component={Profile}/>
        </Switch>
    )
}


export default MainRoute;