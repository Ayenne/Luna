 import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import NavigationBar from './NavigationBar'
import Footer from './Footer';
import UserProfilePage from "./UserProfilePage";


import './App.css';
 import LoginForm from "./LoginForm";
 import Registration from "./RegistrationPage";
 import RegistrationCopy from "./RegistrationCopyPage";
 import UserProfileItem from "./UserProfile";

class App extends Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <UserProfilePage />
                <Footer/>

            </div>
        );
    }
}
export default App;
