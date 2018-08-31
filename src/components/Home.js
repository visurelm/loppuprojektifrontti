import React, {Component} from 'react';
import Users from '../components/Users';
import Navcubes from '../components/Navcubes';
import '../App.css';

class Home extends Component{
    render() {
        return (


            <div className="Homepage">

                {!this.props.auth.isAuthenticated() && <h1 align="center">Moro, kirjauduppa &uarr; !</h1>}
                <Navcubes/>
            </div>
        );
    }
}

export default Home;