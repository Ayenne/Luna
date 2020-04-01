import React, { Component } from "react";
import StyledForm from './StyledForm.js';
import loginAction from '../store/actions/login';
import store from '../store/index';

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
          <StyledForm>
            <h2>LOGIN</h2>
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
          </StyledForm>

      </div>
    );
  }
}
export default LoginForm;
