import React, { Component } from 'react';
import NavigationBar from './NavigationBar'
import Footer from './Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginForm from "./LoginForm";
import LoginTitle from "./LoginTitle";
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
                        </Switch>
                    <Footer/>
                </BrowserRouter>
            </div>
        );
    }
}
export default App;
