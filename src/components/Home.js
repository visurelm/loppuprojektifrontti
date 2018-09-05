import React, {Component} from 'react';
import HomeBoy from '../components/HomeBody';
import '../App.css';

class Home extends Component {
    render() {
        return (


            <div className="Homepage">

                {!this.props.auth.isAuthenticated() && <h1 align="center">Moro, kirjauduppa &uarr; !</h1>}
                <HomeBoy/>
            </div>
        );
    }
}

export default Home;