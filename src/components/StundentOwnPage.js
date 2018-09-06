import React, {Component} from 'react';
import axios from 'axios';

class StundentOwnPage extends Component {

    state = {user: {}};

    getUser = () => {
        this.componentDidMount();
    };

    componentDidMount() {
        axios.defaults.headers.common = {
            Authorization: "Bearer " + localStorage.getItem("access_token")
        };
        axios.get("/api/user")
            .then(res => {
                return res.data;
            })
            .then(res => {

                axios.get("/users/" + res.name)
                    .then(res => {
                        let user = res.data;
                        //TODO jos user.username==null niin ohjaa johonkin.
                        if (user.username !== null) {

                            axios.get("groups/" + user.groupid)
                                .then(res => {
                                    const group = res.data;
                                    user.groupname = group.groupname;
                                    this.setState({user: user})
                                });
                        }
                    })
            });

    }

    listCompletedMissions = () => {
        let completed = this.state.user.completedmissions;
        if (completed !== undefined && completed.length > 0) {
            return completed.map((task) => {
                return <li>{task}</li>;

            })
        }
        else {
            return "Ei vielä tehtyjä tehtäviä."
        }
    };


    render() {

        return (
            <div>
                <h3>Käyttäjän omat tiedot</h3>
                <table>
                    <tbody>
                    <tr>
                        <td>Nimi:</td>
                        <td>{this.state.user.username}</td>
                    </tr>
                    <tr>
                        <td>Opetusryhmä:</td>
                        <td>{this.state.user.groupname}</td>
                    </tr>
                    <tr>
                        <td>Tehdyt tehtävät:</td>
                        <td>
                            {this.state.user.completedmissions !== undefined && <ul>{this.listCompletedMissions()}</ul>}
                            {this.state.user.completedmissions === undefined && <p>{this.listCompletedMissions()}</p>}
                        </td>
                    </tr>
                    </tbody>
                </table>
                <button href="localhost:3000/">Palaa etusivulle</button>
            </div>
        );
    }
}

export default StundentOwnPage;