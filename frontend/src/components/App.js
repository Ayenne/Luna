 import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import NavigationBar from './NavigationBar'
import Footer from './Footer';


import './App.css';
 import LoginForm from "./LoginForm";
 import Registration from "./RegistrationPage";
 import RegistrationCopy from "./RegistrationCopyPage";

class App extends Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <RegistrationCopy />
                <Footer/>

            </div>
        );
    }
}
export default App;
