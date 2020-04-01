import React, { Component } from "react";
import styled from "styled-components";

import loginAction from '../store/actions/login';
import store from '../store/index';


const SubmitFormContainer = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column;
    width: 1440px;
    height: 802px;
    margin: 0 auto;
    padding: 100px 50px 75px 50px;
    background-color: #f8f8f8;
    
    h2 {
    border-bottom: solid 3px #e47d31;
        height: 40px;
        width: 100px;
        font-family: Helvetica;
        font-weight: bold;
        color: #4c4c4c;
        text-align: center;
        font-size: 24px;
        margin-top: 50px;
        margin-bottom: 75px; 
    }
    button {
        width: 200px;
        height: 55px;
        border-radius: 28px;
        font-family: Helvetica;
        font-size: 20px;
        text-align: center;
        color: #ffffff;
        background-color: #e47d31;
        border: 0px;
        margin-top: 30px;
    }
    
    input {
        width: 340px;
        height: 52px;
        border-radius: 3px;
        border: solid 1px #ebebeb;
        background-color: #ffffff;
        padding: 10px;
        margin: 5px;
        box-sizing: border-box;
    }
`;


class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };

  LogIn(e) {
        e.preventDefault();
        store.dispatch(loginAction(this.state.email, this.state.password));
    }

  render() {
    return (
      <div className="login-form-container">
          <SubmitFormContainer>
            <h2>Log in to begin reviewing !</h2>
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
                <button type="submit" onClick = {(e) => this.LogIn(e)}>Login</button>
              </form>
          </SubmitFormContainer>

      </div>
    );
  }
}
export default LoginForm;
