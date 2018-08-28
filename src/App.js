import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Grid} from 'react-bootstrap';
import './App.css';
import Home from './components/Home';
import Users from './components/Users';
import LoadingCallback from './components/LoadingCallback';
import NotFound from './components/NotFound';


export default class App extends Component {
    render() {
        let mainComponent = "";
        switch (this.props.location) {
            case "":
                mainComponent = this.props.auth.isAuthenticated() ? <Home {...this.props}/> : <div></div>;
                break;
            case "callback":
                mainComponent = <LoadingCallback/>
                break;
            case "Users":
                mainComponent = this.props.auth.isAuthenticated() ? <Users/> : <NotFound/>;
                break;
            default:
                mainComponent = <NotFound/>

        }
        return <div>
            {!this.props.auth.isAuthenticated() &&
            <div>
                {this.props.auth.isAuthenticated()}
                Kirjaudu ensin poeka!
                <hr/>
                <button onClick={this.props.auth.login}>Login</button>
            </div>}
            {this.props.auth.isAuthenticated() && <button onClick={this.props.auth.logout}>Logout</button>}
            {mainComponent}

        </div>
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
