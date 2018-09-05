import React from 'react';
import {Route, Router, Switch, Redirect} from 'react-router-dom';
import Home from './components/Home';
import LoadingCallback from './components/LoadingCallback';
import history from './history';
import Users from './components/Users';
import StundentOwnPage from "./components/StundentOwnPage";
import TeachersView from "./components/TeachersView";
import Games from './components/Games';
import SumGame from './games/sumgame/Sumgame';
import NotFound from "./components/NotFound";
import PomojenPomot from "./groups/PomojenPomot";
import SignUpPage from "./components/SignUpPage";
import GroupView from "./components/GroupView";
import MissionBundleView from "./components/MissionBundleView";
import CMB from './components/CreateMissionBundle';


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
                            <Route exact path="/CreateMissionBundle" render={(props) => this.props.auth.isAuthenticated() &&
                                <CMB auth={this.props.auth} {...props} />}/>
                            <Route path="/SingUpPage" render={(props) => this.props.auth.isAuthenticated() &&
                                <SignUpPage auth={this.props.auth} {...props} />}/>
                            <Route path="/callback" render={(props) => {this.props.handleAuthentication(props);

                                return <LoadingCallback {...props} />
                            }}/>
                            <Route path="/groups/:groupid" render={(props)=><GroupView {...props}/>}/>
                            <Route path="/missionbundle/:id" render={(props)=><MissionBundleView {...props}/>}/>
                            <Route exact path="/jermu/add" render={(props)=><SignUpPage auth={this.props.auth} {...props}/>}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}