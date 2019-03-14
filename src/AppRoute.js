// LIST IMPORT MODULE
import React, { Component } from 'react';
import MainRoute from "./route/MainRoute";

// LIST IMPORT COMPONENT
// import Navigation from "./components/Navigation"
// import Footer from './components/Footer'

// MAIN CLASS
class AppRouter extends Component {
    // postSignout = () => {
    //     localStorage.clear()
    //     this.props.history.push("/");
    //     // console.log("TEST PROPS FROM LOUGOUT", this.props)
    // };
    // checkState = () => {
    //     console.log("TEST STATE", this.props.username)
    // }

    render() {
        return (
            <div>
                <MainRoute />
            </div>
        );
    }
}

// EXPORT THE MAIN CLASS
export default AppRouter;
