import React, {Component} from 'react';
import Users from '../components/Users';
import Navcubes from '../components/Navcubes'

class Home extends Component{
    render() {
        return (


            <div className="Homepage">
                <Navcubes/>
                {!this.props.auth.isAuthenticated() && <h1>Moro, kirjaudu!</h1>}
                {this.props.auth.isAuthenticated() && <h1>kaikkee shittii.. alkuun juuserit</h1>}
                {this.props.auth.isAuthenticated() && < Users />}

            </div>
        );
    }
}

export default Home;