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
            </div>
        );
    }
}

export default AppRoute;
// export default connect("is_login",actions)(withRouter(App));
