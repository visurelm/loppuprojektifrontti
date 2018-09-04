import React, {Component} from 'react';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import {Grid} from 'react-bootstrap';
import './App.css';
// import Home from './components/Home';
// import Users from './components/Users';
// import LoadingCallback from './components/LoadingCallback';
// import NotFound from './components/NotFound';
import Auth from "./Authentication/Auth";
import MakeMainRoutes from "./routes";
import Navigation from './Navigation';


export default class App extends Component {
    auth = new Auth();
    handleAuthentication = (nextState, replace) => {
        if (/access_token|id_token|error/.test(nextState.location.hash)) {
            this.auth.handleAuthentication();
        }
    };

    render() {
        return (
            <div className="App-page">
                <Navigation auth={this.auth}/>
                <MakeMainRoutes auth={this.auth} handleAuthentication={this.handleAuthentication}/>
            </div>
        );
    }
};


