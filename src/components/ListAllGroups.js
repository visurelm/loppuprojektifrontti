import React, {Component} from 'react';
import axios from "axios";

class ListAllGroups extends Component{

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
            return (
                <tr key={groups.groupid}>
                    <td>{groups.groupid}</td>
                    <a href="/groups/PomojenPomot"><td>{groups.groupname}</td></a>
                    <td>{groups.missionscores}</td>

                </tr>)
        });
            return (
            <div>
                <table className='teachersview'>
                    <thead>
                    <tr>
                        <td>Ryhmän ID</td>
                        <td>Ryhmän superhypernimi</td>
                        <td>Ryhmän (0) pisteet</td>

                    </tr>
                    </thead>
                    <tbody>{groupmap}</tbody>
                </table>
            </div>
        );
    }
}

export default ListAllGroups;