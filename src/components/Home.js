import React, {Component} from 'react';
import Users from '../components/Users';

class Home extends Component{
    render() {
        return (
            <div className="Homepage">
                <h1>kaikkee shittii.. alkuun juuserit</h1>
                <Users/>
            </div>
        );
    }
}

export default Home;