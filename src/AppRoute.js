<<<<<<< HEAD
import React, { Component } from 'react';
import MainRoute from './route/MainRoute';
import { withRouter } from "react-router-dom";
// import Header from './component/Header';
// import { connect } from "unistore/react"
// import { actions } from './store';

class AppRoute extends Component {
  
    render() {
        return (
            <div className="App">
                {/* <Header doLogout={this.doLogout}/> */}
                <MainRoute/>
                {/* <Footer/> */}
=======
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
>>>>>>> dev
            </div>
        );
    }
}

<<<<<<< HEAD
export default AppRoute;
// export default connect("is_login",actions)(withRouter(App));
=======
// EXPORT THE MAIN CLASS
export default AppRouter;
>>>>>>> dev
