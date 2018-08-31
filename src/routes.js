import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import LoadingCallback from './components/LoadingCallback';
import Auth from './Authentication/Auth';
import history from './history';
import Users from './components/Users';
import StundentOwnPage from "./components/StundentOwnPage";
import TeachersView from "./components/TeachersView";
import Logout from './components/LogOut';
import Games from './components/Games';
import SumGame from './games/sumgame/game';
import NotFound from "./components/NotFound";
import PomojenPomot from "./groups/PomojenPomot";


export default class MakeMainRoutes extends React.Component {

    render() {
        return (
            <div>
                <Router history={history}>
                    <div>
                        <Switch>
                            <Route exact path="/" render={(props) => <Home auth={this.props.auth} {...props} />}/>
                            <Route path="/users" render={(props) => this.props.auth.isAuthenticated() &&
                                <Users auth={this.props.auth} {...props} />}/>
                            <Route path="/MyOwnPage" render={(props) => this.props.auth.isAuthenticated() &&
                                <StundentOwnPage auth={this.props.auth} {...props} />}/>
                            <Route path="/TeachersView" render={(props) => this.props.auth.isAuthenticated() &&
                                <TeachersView auth={this.props.auth} {...props} />}/>
                            <Route exact path="/games" render={(props) => this.props.auth.isAuthenticated() &&
                                <Games auth={this.props.auth} {...props} />}/>
                            <Route path="/games/sumgame" render={(props) => this.props.auth.isAuthenticated() &&
                                <SumGame auth={this.props.auth} {...props} />}/>
                            <Route exact path="/groups/PomojenPomot" render={(props) => this.props.auth.isAuthenticated() &&
                                <PomojenPomot auth={this.props.auth} {...props} />}/>
                            <Route path="/Logout" render={(props) => this.props.auth.isAuthenticated() &&
                                <Logout auth={this.props.auth} {...props} />}/>
                            <Route path="/callback" render={(props) => {
                                this.props.handleAuthentication(props);
                                return <LoadingCallback {...props} />
                            }}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}