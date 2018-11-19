import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Carousel from 'react-bootstrap/lib/Carousel';
import {Link} from "react-router-dom";
import websettings from '../assets/websettings';

class Start extends Component {
    constructor(props){
        super();
        this.state={

        };
    }
    render() {
    const {classes} = this.props;
      return (
        <section className="App-home-container">
            <Carousel>
                <Carousel.Item>
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Link className="btn btn-default btn-skip" to="/home">Skip</Link>
       </section>
      )
    }
}

Start.propTypes = {
  classes:PropTypes.object,
}
export default Start;