import React from "react";
import { Route, Switch } from "react-router-dom";

import Question from "../page/Question"
// import NotFound from "../pages/NotFound";

const MainRoute = () => {
    return (
        <Switch>
            <Route path="/" component = {Question}/>
        </Switch>
    )
}

export default MainRoute;