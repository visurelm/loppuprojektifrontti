import React, {Component} from 'react';
import axios from "axios";

class ListAllMissions extends Component {

    state = {missions: []};

    getAllMissions = () => {
        this.componentDidMount();
    }

    componentDidMount() {
        console.log(localStorage.getItem("access_token"));
        axios.defaults.headers.common = {
            Authorization: "Bearer " + localStorage.getItem("access_token")
        };
        axios.get("/missions")
            .then(res => {
                const missions = res.data;
                this.setState({missions});
            });
    }

    render() {
        const missionsdata = this.state.missions;
        const tasks = missionsdata.map((mission) => {
            return (<tr key={mission._id}>
                <td>{mission.id}</td>
                <td>{mission.missionname}</td>
                <td>{mission.componentname}</td>
            </tr>)
        });

        return (
            <div>
                <table className='missions'>
                    <thead>
                    <tr>
                        <td>Mission ID</td>
                        <td>Tehtävän nimi</td>
                        <td>Komponentin nimi</td>
                    </tr>
                    </thead>
                    <tbody>{tasks}</tbody>
                </table>
            </div>
        );
    }
}

export default ListAllMissions;
