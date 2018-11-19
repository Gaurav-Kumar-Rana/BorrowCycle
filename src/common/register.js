import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import ToggleButtonGroup from 'react-bootstrap/lib/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/lib/ToggleButton';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Popover from 'react-bootstrap/lib/Popover';
// import Tooltip from 'react-bootstrap/lib/Tooltip';


import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import websettings from '../assets/websettings';

class Register extends Component {
    constructor(props){
        super();
        this.state={
          formRadioOptions:0,
          passowrdStrengthColor:"gray",
          passwordStrength:"Please enter a strong password",
          reenterPasswordMsg:"Re-enter your password",
          reenterPasswordMatchStatus:"gray"
        };
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.sell = this.Action1.bind(this);
        this.buy = this.Action2.bind(this);
        this.keyUpHandle = this.keyUpHandle.bind(this);
    }
    handleRadioChange(e){
      this.setState({
        formRadioOptions:e
      });
      //console.log(this.state.formRadioOptions);
    }
    keyUpHandle(event){
      let currentFieldName = event.currentTarget.name;
      let _value = event.currentTarget.value;
      switch(currentFieldName){
        case "u_passowrd":
            var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
            var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
            if(strongRegex.test(_value)){
              this.setState({
                passowrdStrengthColor:"green",
                passwordStrength:"Strong"
              });
            }else if(mediumRegex.test(_value)){
              this.setState({
                passowrdStrengthColor:"orange",
                passwordStrength:"Medium Strong"
              });
            }else{
              this.setState({
                passowrdStrengthColor:"red",
                passwordStrength:"Weak"
              });
            }
        break;

        case "u_repassowrd":
        var _value1 = document.getElementById('formPassword').value;
        if(_value1!=="" && _value1!==_value){
          this.setState({
            reenterPasswordMsg:"Password did not matched",
            reenterPasswordMatchStatus:"red"
          });
        }else if(_value1!=="" && _value1===_value){
          this.setState({
            reenterPasswordMsg:"Password matched",
            reenterPasswordMatchStatus:"green"
          });
        }
        break;

        default :

        break;
      }
    }
    Action1(){
      return(<div>Action 1</div>);
    }
    Action2(){
      return(<div>Action 2</div>);
    }
    popoverRight(msg){
      return(
        <Popover id="popover-positioned-right" title="Password Strength">
          <strong>{msg}</strong>
        </Popover>
      )
    }
    render() {
    const {classes} = this.props;
      return (
        <section className="App-register-container">
            <Form className="login-panel" method="get">
            <h4>{websettings.body.register.title}</h4>
              <Row className="show-grid">
                <Col xs={12} md={6}>
                  <FormGroup controlId="formFirstName" validationState={this.state.formRegisterFname}>
                    <ControlLabel>{websettings.body.register.labels.fname.label_name}{websettings.body.register.labels.fname.mandatory?"*":null}</ControlLabel>
                    <InputGroup>
                      <FormControl type="text" placeholder={websettings.body.register.labels.fname.label_name} name="u_fname" />
                    </InputGroup>
                  </FormGroup>
                </Col> 
                <Col xs={12} md={6}>
                  <FormGroup controlId="formLastName" validationState={this.state.formRegisterLname}>
                    <ControlLabel>{websettings.body.register.labels.lname.label_name}{websettings.body.register.labels.lname.mandatory?"*":null}</ControlLabel>
                    <InputGroup>
                      <FormControl type="text" placeholder={websettings.body.register.labels.fname.label_name} name="u_lname" />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col xs={12}>
                  <FormGroup className="pos-relative" controlId="formPassword" validationState={this.state.formRegisterPassword}>
                    <ControlLabel>{websettings.body.register.labels.passowrd.label_name}</ControlLabel>
                    <InputGroup>
                      <FormControl type="password" placeholder={websettings.body.register.labels.passowrd.label_name} onKeyUp={this.keyUpHandle} name="u_passowrd" />
                      <OverlayTrigger trigger="click" placement="right" overlay={this.popoverRight(this.state.passwordStrength)}>
                        <InputGroup.Addon style={{"color":this.state.passowrdStrengthColor}} className="icon-notification"></InputGroup.Addon>
                      </OverlayTrigger>
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col xs={12}>
                  <FormGroup controlId="formRePassword" validationState={this.state.formRegisterRePassword}>
                    <ControlLabel>{websettings.body.register.labels.repassowrd.label_name}</ControlLabel>
                    <InputGroup>
                      <FormControl type="password" placeholder={websettings.body.register.labels.repassowrd.label_name} onKeyUp={this.keyUpHandle} name="u_repassowrd" />
                      <OverlayTrigger trigger="click" placement="right" overlay={this.popoverRight(this.state.reenterPasswordMsg)}>
                        <InputGroup.Addon style={{"color":this.state.reenterPasswordMatchStatus}} className="icon-notification"></InputGroup.Addon>
                      </OverlayTrigger>
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col  xs={12}>
                    <FormGroup>
                        <ControlLabel>{websettings.body.register.labels.actiondescription.label_name}</ControlLabel>
                        <ButtonToolbar>
                          <ToggleButtonGroup type="radio" name="formRadioOptions"  value={this.state.formRadioOptions} defaultValue={this.state.formRadioOptions} onChange={this.handleRadioChange}>
                            <ToggleButton value={1}>{websettings.body.register.labels.action1.label_name}</ToggleButton>
                            <ToggleButton value={2}>{websettings.body.register.labels.action2.label_name}</ToggleButton>
                          </ToggleButtonGroup>
                        </ButtonToolbar>
                    </FormGroup>
                    {this.state.formRadioOptions === 1 ? this.Action1():null}
                    {this.state.formRadioOptions === 2 ? this.Action2():null}
                </Col>
                <Col xs={12}>
                  <FormGroup controlId="formLoginBtn">
                    {this.state.formLoginEmail === "success"? <Button type="submit" bsStyle="primary">Sign in</Button> : <Button disabled type="submit" bsStyle="primary">Sign in</Button>}
                  </FormGroup>
                </Col> 
              </Row>
            </Form>
       </section>
      )
    }
}

Register.propTypes = {
  classes:PropTypes.object,
}
export default Register;