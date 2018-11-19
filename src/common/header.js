import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link } from "react-router-dom";

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';

import websettings from '../assets/websettings';

class Header extends Component {
    constructor(props){
        super();
        this.state={
            menuopen:false
        };
    }
    render() {
    const {classes} = this.props;
      return (
        <header className="App-header">
            <Navbar collapseOnSelect={true}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={"/home"}>{websettings.title}</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        {websettings.header.navbar_links.map((navlink,index)=>(
                            <li key={index}>
                                <Link role="button" to={"/" + navlink.url}>{navlink.link_name}</Link>
                            </li>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
       </header>
      )
    }
}

Header.propTypes = {
  classes:PropTypes.object,
}
export default Header;