import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Grid} from 'react-bootstrap';
import './App.css';
import Home from './components/Home';
import Users from './components/Users';
import LoadingCallback from './components/LoadingCallback';
import NotFound from './components/NotFound';
import Auth from "./Authentication/Auth";
import MakeMainRoutes from "./routes";
// import Navigation, {NavDropdown, NavItem} from './components/Navigation'
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
            <div>
                {!this.auth.isAuthenticated() &&
                <div>
                    Kirjaudu ensin poeka!
                    <hr/>
                    <button onClick={this.auth.login}>Login</button>
                </div>}
                <Navigation/>
                {this.auth.isAuthenticated() && <button onClick={this.auth.logout}>Logout</button>}
                <MakeMainRoutes auth={this.auth} handleAuthentication={this.handleAuthentication}/>
            </div>
        );
    }
};


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//           <Home/>
//       </div>
//     );
//   }
// }
//
// export default App;
