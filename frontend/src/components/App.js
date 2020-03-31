 import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import NavigationBar from './NavigationBar'
import Footer from './Footer';


import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <Footer/>

            </div>
        );
    }
}
export default App;
