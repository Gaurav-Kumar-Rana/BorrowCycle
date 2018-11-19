import React, { Component } from 'react';
import Header from './common/header';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './common/login';
import Register from './common/register';
import Home from './common/home';
import Start from './common/start';
import websettings from './assets/websettings';

class App extends Component {
  render() {
    const {classes} = this.props;
    return (
      <Router>
        <div className={"App " + websettings.header.navbar_color}>
            <Header/>
            <Route path="/" exact component={Start} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </div>
      </Router>
    );
  }
}
App.propTypes = {
  classes:PropTypes.object,
}
export default App;
