import React, { Component } from 'react';
import NavigationBar from './NavigationBar'
import Footer from './Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import LoginForm from "./LoginForm";
import Registration from "./RegistrationPage";
import RegistrationCopy from "./RegistrationCopyPage";

import Home from "./Home";


class App extends Component {
    render() {
        return (
            <div>

                <BrowserRouter>
                    <NavigationBar />
                        <Switch>
                            <Route exact={ true } path="/login" component={LoginForm} />
                            <Route exact={ true } path="/" component={Home} />
                            <Route exact={ true } path="/register" component={Registration} />
                        </Switch>
                    <Footer/>
                </BrowserRouter>

            </div>
        );
    }
}
export default App;
