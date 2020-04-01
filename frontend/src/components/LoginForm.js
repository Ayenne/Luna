import React, { Component } from "react";
import styled from "styled-components";

const StyledLogin = styled.div`
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
`;

const StyledInput = styled.input`
  width: 340px;
  height: 52px;
  border-radius: 3px;
  border: solid 1px #ebebeb;
  background-color: #ffffff;
  padding: 10px;
  margin: 5px;
  box-sizing: border-box;
`;

const Login = () => (
  <StyledLogin>
    <h2>LOGIN</h2>
    <StyledInput type="text" placeholder="Username" />
    <StyledInput type="password" placeholder="Password" />
    <button>Login</button>
  </StyledLogin>
);

export default Login;
