import React, { Component } from "react";
import styled from "styled-components";

const StyledRegistration = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 1440px;
  height: 802px;
  margin: 0 auto;
  padding: 150px 50px 75px 50px;
  background-color: #f8f8f8;
  
  h2 {
        width: 357px;
        height: 29px;
        font-family: Helvetica;
        font-size: 24px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #4c4c4c;
         border-bottom: solid 2px #e47d31;
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
    width: 387px;
    height: 52px;
    border-radius: 3px;
    border: solid 1px #ebebeb;
    background-color: #ffffff;
  padding: 20px;
  margin: 10px;
  box-sizing: border-box;
  font-family: Helvetica;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #979797;
  
  ::placeholder {
  color: #979797;
  padding-left: 23px;
}

`;

const Registration = () => (
  <StyledRegistration>
           <h2>REGISTRATION</h2>
      <StyledInput type="text" placeholder="E-Mail address" />
      <button>Register</button>
  </StyledRegistration>
);

export default Registration;
