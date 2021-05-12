import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import styled from 'styled-components'

const LoginWrapper = styled.div`
`

const FormWrapper = styled.div`
  margin-top: 50px;
  
`

const FormContainer = styled.div`
  width: 500px;
  margin: 0 auto;
  
`

const Form = styled.form`
  padding: 20px;
  font-size: 14px;
  background-color: #fff;
  border: 1px solid #d8dee2;
  border-radius: 0 0 3px 3px;
  
`

const AppName = styled.div`
  margin: 25px;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  
`

const LogInButton = styled.button`
  position: relative;
  display: inline-block;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  vertical-align: middle;
  background-position: -1px -1px;
  background-size: 110% 110%;
  border: 1px solid rgba(27, 31, 35, 0.2);
  border-radius: 0.25em;
  width: 100%;
  cursor: pointer;
  background: #318231;
  transition: ease-in-out 0.1s;
  color: #fff;
  margin-top: 10px;

  &:hover {
        background: #fff;
        color: #000;
        border: 1px solid #fff;
    }

`

const Input = styled.input`
  margin-top: 5px;
  margin-bottom: 15px;
  display: block;
  width: 100%;
  min-height: 34px;
  padding: 6px 2px 10px ;
  font-size: 16px;
  line-height: 20px;
  color: #24292e;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: right 8px center;
  border: 1px solid #d1d5da;
  border-radius: 3px;
  outline: none;
  box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0, 0.75);
  width: 100%;
`

const Field = styled.div`
  width: 100%;
`

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogged: false,
      loginParams: {
        user_id: "",
        user_password: ""
      }
    };
  }
  handleFormChange = event => {
    let loginParamsNew = { ...this.state.loginParams };
    let val = event.target.value;
    loginParamsNew[event.target.name] = val;
    this.setState({
      loginParams: loginParamsNew
    });
  };
 
  login = event => {
    let user_id = this.state.loginParams.user_id;
    let user_password = this.state.loginParams.user_password;
    if (user_id === "Magu" && user_password === "123") {
      localStorage.setItem("token", "T");
      this.setState({
        islogged: true
      });
    }
    event.preventDefault();
  };
  render() {
    if (localStorage.getItem("token")) {
      return <Redirect to="/" />;
    }
    return (
    <LoginWrapper>
      <FormWrapper>
      <FormContainer>
        <Form onSubmit={this.login} >
          <AppName>Magu</AppName>
          <Field>
            <div className="col">
              <Input
                type="text"
                name="user_id"
                onChange={this.handleFormChange}
                placeholder="Enter Username"
              />
              <Input
                type="password"
                name="user_password"
                onChange={this.handleFormChange}
                placeholder="Enter Password"
              />
              <input type="checkbox" required/>You must be 21 years of age or older to view this site.
              <LogInButton type="submit">SUBMIT</LogInButton>
            </div>
          </Field>
          <p></p>
        </Form>
      </FormContainer>
      </FormWrapper>
    </LoginWrapper>
    );
  }
}
export default Login;