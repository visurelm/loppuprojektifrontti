import React, {Component} from 'react';
import axios from "axios";
import '../css/elsa.css';

class ListAllGroups extends Component {

    state = {groups: []}

    getGroups = () => {
        this.componentDidMount();
    };

    componentDidMount() {
        axios.defaults.headers.common = {
            Authorization: "Bearer " + localStorage.getItem("access_token")
        };

        axios.get("/groups")
            .then(res => {
                let groups = res.data;
                console.log(groups);
                this.setState({groups});
            });
    }

    render() {
        const groupdata = this.state.groups;
        const groupmap = groupdata.map((groups) => {
            let linkTo = "/groups/" + groups.groupid;
            console.log("LinkTo", linkTo)
            return (
                <tr key={groups.groupid}>
                    <td>{groups.groupid}</td>
                    <td><a href={linkTo}>{groups.groupname} </a></td>
                    <td>{groups.missionscores}</td>

                </tr>)
        });
        return (
            <div>
                <table className='teachersview'>
                    <thead>
                    <tr>
                        <td>Ryhmän ID</td>
                        <td>Ryhmän nimi</td>
                    </tr>
                    </thead>
                    <tbody>{groupmap}</tbody>
                </table>
            </div>
        );
    }
}

export default ListAllGroups;