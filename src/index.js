import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import {Provider} from "unistore/react";
// import {store} from "./"
import AppRoute from "./AppRoute"
import {BrowserRouter} from "react-router-dom"
// ReactDOM.render(<App />, document.getElementById('root'));

const rootEl = document.getElementById("root");
const render = Component =>
    ReactDOM.render(
        <BrowserRouter>
            <Component/>
        </BrowserRouter>
        ,rootEl
    )

render(AppRoute)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
