import React, { Component } from 'react';
import PropTypes from 'prop-types';

import websettings from '../assets/websettings';
import {Link} from "react-router-dom";

class Home extends Component {
    constructor(props){
        super();
        this.state={

        };
    }
    render() {
    const {classes} = this.props;
      return (
        <section className="App-home-container">
            <div className="disp-table">
                <div className="disp-table-cell btn-panel">
                    {websettings.body.home.buttons.map((btn,index)=>(<Link key={index} className="btn btn-default btn-lg" to={"/" + btn.url}>{btn.button_name}</Link>))}
                </div>
            </div>
       </section>
      )
    }
}

Home.propTypes = {
  classes:PropTypes.object,
}
export default Home;