import React, {Component} from 'react';
import './App.css';
import Auth from "./Authentication/Auth";
import MakeMainRoutes from "./routes";
import Navigation from './Navigation';
import Navcubes from "./components/Navcubes";
import Elsafooter from "./components/elsafooter";


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
                <Navcubes/>
                <Navigation auth={this.auth}/>
                <MakeMainRoutes auth={this.auth} handleAuthentication={this.handleAuthentication}/>
                <Elsafooter/>
            </div>
        );
    }
};


