// IMPORT MODULE
import React from 'react';
import ReactDOM from 'react-dom';
import AppRoute from "./AppRoute";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'unistore/react'
import { store } from './store'

// SET THE APP'S GLOBAL ENVIRONMENT
const render = Component =>
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Component />
        </BrowserRouter>
    </Provider>
    , 
document.getElementById('root')
);

// RENDER THE APP
render(AppRoute)

// TURN THE SERVICEWORKER ON
serviceWorker.register();
