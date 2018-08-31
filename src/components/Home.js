import React, {Component} from 'react';
import Users from '../components/Users';

class Home extends Component{
    render() {
        return (

            <div className="Homepage">
                {!this.props.auth.isAuthenticated() && <h1>Moro, kirjaudu!</h1>}
                {this.props.auth.isAuthenticated() && <h1>kaikkee shittii.. alkuun juuserit</h1>}
                {this.props.auth.isAuthenticated() && < Users />}

            </div>
        );
    }
}

export default Home;