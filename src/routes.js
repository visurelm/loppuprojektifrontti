import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import LoadingCallback from './components/LoadingCallback';
import Auth from './Authentication/Auth';
import history from './history';
import Users from './components/Users';




export default class MakeMainRoutes extends React.Component {

    render(){
    return (
        <div>
        <Router history={history} >
            <div>
                <Route exact path="/" render={(props) => <Home auth={this.props.auth} {...props} />} />
                <Route path="/users" render={(props) => this.props.auth.isAuthenticated() && <Users auth={this.props.auth} {...props} />} />
                <Route path="/callback" render={(props) => {
                    this.props.handleAuthentication(props);
                    return <LoadingCallback {...props} />
                }}/>
            </div>
        </Router>
    </div>
    );}
}