import React, {Component} from 'react';
import axios from 'axios';

class MyOwnPage extends Component {

    state = {user:[]};

    getUser = () => {
        this.componentDidMount();
    }

    componentDidMount() {
        axios.get("/users/18/id")
            .then(res => {
                const user = res.data;
                console.log(user);
                this.setState({user});
            })
    }


    render() {

        return (
            <div>
                <p>Tänne tulee käyttäjän omat tiedot</p>
                <button href="/">Palaa etusivulle</button>
            </div>
        );
    }
}

export default MyOwnPage;