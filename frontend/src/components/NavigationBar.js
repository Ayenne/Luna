import React, { Component } from "react";
import styled from 'styled-components';
import { Link  } from "react-router-dom";

import logo from "../assets/logo.svg";

    const NavigationBar = styled.div`
        height: 71px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border: solid 1px #d8d8d8;
        width: 100%;
        margin-right: 30px;
        position: fixed;
        align-items: center;
        /* verify the use of the following: */
        overflow: hidden;
        top: 0;
        background-color: white;
    `;

    const NavSectionLeft = styled.div`
        width: 20%;
        height: 100%;
        display: flex;
        justify-content: center;
        margin-left: 20px;
    `;

    const LunaLogo = styled.img`
           margin-top: 10px;
           width: 60px;
           height: 60px;
     `

    const NavSectionMiddle = styled.div`
        width: 40%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        text-decoration: none;
        color: #4a4a4a;
        font-size: 20px;
            font-family: Helvetica;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: center;
        
    `
    const StyledLink = styled(Link)`
          height: 100%;
            width: 35vw;
            display: flex;
            justify-content: center;
            margin: 0 40px 0 40px;
            text-decoration: none;
            align-items: center;
            border-bottom: white solid 6px;  
          `;

    const NavSectionRight = styled.div`
        width: 20%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        position: relative;
        
    `;

    const NavigationSignUpButton = styled.button`
        width: 100px;
        height: 41px;
        background: #e47d31;
        border-top-left-radius: 28px;
        border-bottom-left-radius: 28px;
        border: 0px;
        hover 
        font-weight: bold;
        font-size: 16px;
        color: #ffffff;
        font-family: Helvetica;
        text-decoration: none;
`;
const NavigationLoginButton = styled.button`
       width: 100px;
        height: 41px;
        background: #e47d31;
        border-top-right-radius: 28px;
        border-bottom-right-radius: 28px;
        border: 0px;
        border-left: #ffffff solid 1px;
        font-size: 16px;
        color: #ffffff;
`;
    const NavBar = () => {
        return (
            <NavigationBar>
                <NavSectionLeft>
                    <LunaLogo src={logo} alt="Luna"/>
                </NavSectionLeft>
                <NavSectionMiddle>
                    <StyledLink to="/">Home</StyledLink>
                    <StyledLink to="/search" className="link">Search</StyledLink>
                    <StyledLink to="/userprofile" className="link">Profile</StyledLink>
                </NavSectionMiddle>
                <NavSectionRight>
                    <NavigationSignUpButton>SignUp</NavigationSignUpButton>
                    <NavigationLoginButton>Login</NavigationLoginButton>
                </NavSectionRight>

            </NavigationBar>
        )
    }

export default NavBar;