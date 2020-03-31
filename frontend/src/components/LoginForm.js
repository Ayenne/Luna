import React, { Component } from "react";
import "./LoginForm.css";
import LoginPageButton from "../components/LoginPageButton";
import loginAction from '../store/actions/login';
import store from '../store/index';
import styled from 'styled-components';


const SubmitFormContainer = styled.div`
    margin-top: 100px;
`;


class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };

  LogIn(e) {
      console.log('henlo');
        e.preventDefault();
        store.dispatch(loginAction(this.state.email, this.state.password));
    }

  render() {
    return (
      <div className="login-form-container">
          <SubmitFormContainer>
              <form onSubmit={(e) => this.LogIn(e)}>
                <input
                    placeholder="E-mail"
                    type="text"
                    value={this.state.email}
                    onChange={e => this.setState({"email": e.target.value})}
                />
                <input
                    placeholder="Password"
                    type="password"
                    value={this.state.password}
                    onChange = {e => this.setState({"password": e.target.value})}
                />
                <LoginPageButton onClick = {(e) => this.LogIn(e)} />
              </form>
          </SubmitFormContainer>

      </div>
    );
  }
}
export default LoginForm;
