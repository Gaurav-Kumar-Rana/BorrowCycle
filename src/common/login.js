import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Button from 'react-bootstrap/lib/Button';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import InputGroup from 'react-bootstrap/lib/InputGroup';

import websettings from '../assets/websettings';

class Login extends Component {
    constructor(props){
        super();
        this.state={
          formLoginEmail:null,
          formLoginPassword:null,
          formLoginBtn:null,
          showPassowrd:false,
        };
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.showPasswordHandle = this.showPasswordHandle.bind(this);
        this.hidePasswordHandle = this.hidePasswordHandle.bind(this);
    }
    handleKeyDown(event){
      let _value = event.currentTarget.value.trim();
      if(_value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)){
          this.setState({
            formLoginEmail:"success"
          });
      }else{
        this.setState({
          formLoginEmail:"error"
        });
      }
    }
    showPasswordHandle(){
      this.setState({
        showPassowrd:true,
      });
    }
    hidePasswordHandle(){
      this.setState({
        showPassowrd:false,
      });
    }

    render() {
    const {classes} = this.props;
      return (
        <section className="App-login-container">
            <Form className="login-panel" method="get">
              <FormGroup controlId="formLoginEmail" validationState={this.state.formLoginEmail}>
                <ControlLabel>{websettings.body.login.labels.email.label_name}</ControlLabel>
                <InputGroup>
                  <InputGroup.Addon className="icon-envelop"></InputGroup.Addon>
                  <FormControl type="email" placeholder={websettings.body.login.labels.email.label_name} name="u_email" onKeyDown={this.handleKeyDown} />
                </InputGroup>
              </FormGroup>
              <FormGroup className="pos-relative"  controlId="formLoginPassword" validationState={this.state.formLoginPassword}>
                <ControlLabel>{websettings.body.login.labels.passowrd.label_name}</ControlLabel>
                <InputGroup>
                  <InputGroup.Addon className="icon-key"></InputGroup.Addon>
                  {this.state.showPassowrd ? <FormControl type="text" placeholder={websettings.body.login.labels.passowrd.label_name} name="u_passowrd" /> : <FormControl type="password" placeholder="Password" name="u_passowrd" />}
                  <InputGroup.Addon className={this.state.showPassowrd?"icon-eye show-passowrd-icon":"icon-eye-blocked show-passowrd-icon"} onMouseDown={this.showPasswordHandle} onMouseUp={this.hidePasswordHandle} onTouchStart={this.showPasswordHandle} onTouchEnd={this.hidePasswordHandle}></InputGroup.Addon>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Checkbox>{websettings.body.login.labels.rememberme.label_name}</Checkbox>
              </FormGroup>
              <FormGroup controlId="formLoginBtn">
                {this.state.formLoginEmail === "success"? <Button type="submit" bsStyle="primary">{websettings.body.login.labels.signin.label_name}</Button> : <Button disabled type="submit" bsStyle="primary">{websettings.body.login.labels.signin.label_name}</Button>}
              </FormGroup>
            </Form>
       </section>
      )
    }
}

Login.propTypes = {
  classes:PropTypes.object,
}
export default Login;