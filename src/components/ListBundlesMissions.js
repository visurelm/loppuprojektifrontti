import React, {Component} from 'react';
import axios from "axios";
import '../css/elsa.css';

class ListAllGroups extends Component {

    state = {missions: []}

    getGroups = () => {
        this.componentDidMount();
    };

    async componentWillMount() {
        axios.defaults.headers.common = {
            Authorization: "Bearer " + localStorage.getItem("access_token")
        };

        await axios.get("/missions")
            .then(res => {
                // missions = res.data;
                console.log("Haetut tehtävät", res.data)
                this.setState({missions: res.data});
                // ,console.log("Listauksen tila:",this.state));
                console.log("sduioguhsdoighio", this.state)
            });
    }

    render() {
        console.log("Propsina bundlen missionit:", this.props.missionids)
        console.log("Propsina tehdyt:", this.props.completed)
        const missionsdata = this.state.missions;
        console.log("Missionsdata:", missionsdata)

        let missionsmap = missionsdata.map((mission) => {
            console.log("Mission:", mission)
            let linkTo = "/";

            return (
                <tr key={mission.missionname}>
                    <td>{mission.missionname}</td>
                    {this.props.completed.includes(mission.missionname) ?
                        <td><span className="glyphicon glyphicon-ok" aria-hidden="true"></span></td> : <span></span>}
                </tr>)

        });
        // missionsmap = missionsmap.filter(mission=>mission===undefined);
        console.log("Missionsmap", missionsmap);
        return (
            <div>
                <table className='teachersview'>
                    <thead>
                    <tr>
                        <td>Harjoituksen nimi</td>
                        <td>Tehty</td>
                    </tr>
                    </thead>
                    <tbody>{missionsmap}</tbody>
                </table>
            </div>
        );
    }
}

export default ListAllGroups;