import React, {Component} from 'react';
import Users from '../components/Users';
import Navcubes from '../components/Navcubes';
import '../App.css';

class Home extends Component{
    render() {
        return (


            <div className="Homepage">
                <Navcubes/>
                {!this.props.auth.isAuthenticated() && <h1>Moro, kirjaudu!</h1>}

            </div>
        );
    }
}

export default Home;