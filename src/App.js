import React, {Component} from 'react';
import './App.css';
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


