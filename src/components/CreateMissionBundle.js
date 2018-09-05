import React, {Component} from 'react';
import axios from "axios";

class CreateMissionBundle extends Component{

    state = {missions: []}

    getMissions = () => {
        this.componentDidMount();
    };

    componentDidMount() {
        axios.defaults.headers.common = {
            Authorization: "Bearer " + localStorage.getItem("access_token")
        };

        axios.get("/missions")
            .then(res => {
                let missions = res.data;
                console.log(missions);
                this.setState({missions});
            });
    }



    render() {
        const missionsdata = this.state.missions;
        const missionsmap = missionsdata.map((mission) => {
            // let linkTo = "/missionbundle/" + mission.bundleid;
            // console.log("LinkTo", linkTo)
            return (
                <tr key={mission.id}>
                    <td>{mission.id}</td>
                    <td>{mission.missionname} </td>
                    <td>{mission.componentname}</td>

                </tr>)
        });
        return (
            <div>
                <table className='CreateMissionBundle'>
                    <thead>
                    <th>
                        <td>Tehtävän ID</td>
                        <td>Tehtävän nimi</td>
                        <td>sdngoiah</td>
                    </th>
                    </thead>
                    <tbody>{missionsmap}</tbody>
                </table>
            </div>
        );
    }
}

export default CreateMissionBundle;