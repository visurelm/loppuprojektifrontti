import React, {Component} from 'react';
import axios from "axios";

class CreateMissionBundle extends Component {

    state = {missions: [], newbundle: []}

    setNewMissionInto = (ev) => {
        this.setState({newbundle: ev.target.value});
    };

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
                    <td onClick={this.setNewMissionInto}>{mission.id}</td>
                    <td>{mission.missionname} </td>
                    <td>{mission.componentname}</td>
                </tr>)
        });
        const newBundle = this.state.newbundle;
        const bundlemap = newBundle.map((mission) => {
            return (
                <tr key={mission.id}>
                    <td>{mission.id}</td>
                    <td>{mission.missionname} </td>
                </tr>)
        });


        return (
            <div>
                <div className="Missions">
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
                <div className="newBundle">
                    <table>
                        <thead>
                        <th>
                            <td>Tehtävän ID</td>
                            <td>Tehtävän nimi</td>
                        </th>
                        </thead>
                        <tbody>{bundlemap}</tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default CreateMissionBundle;