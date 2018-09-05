import React, {Component} from 'react';
import axios from 'axios';
import '../css/elsa.css';

class Users extends Component{
    state = {users: []};

    getUsers = () => {
        this.componentDidMount();
    };

    componentDidMount() {
        axios.defaults.headers.common = {
            Authorization: "Bearer " + localStorage.getItem("access_token")
        };
        axios.get("/users")
            .then((res, err) => {
                const users = res.data;
                console.log(users);
                this.setState({users});
            }).catch((e) => {
            // window.location = "/";
        });
    };

    listMissions = (completed)=>{
        let missions = Array.isArray(completed) ? completed : [completed];
        let missionString = "";
        for (let i=0;i<missions.length-1;i++){
            missionString += (missions[i] + ", ")
        }
        missionString += missions[missions.length-1];
        return missionString;
    };

    render() {
        const usersdata = this.state.users;
        let self = this;
        const userit = usersdata.map((user) => {
            return <tr key={user._id}>
                <td>{user.username}</td>
                {/*<td>{user.id}</td>*/}
                {/*<td>{user.role}</td>*/}
                {/*<td>{user.points}</td>*/}
                <td>{user.groupid}</td>
                <td>{self.listMissions(user.completedmissions)}</td>
            </tr>
        });
        return (
            <table className='users'>
                <thead>
                    <th>Käyttäjänimi</th>
                    {/*<td>KäyttäjäID</td>*/}
                    {/*<td>role</td>*/}
                    {/*<td>Pisteet</td>*/}
                    <th>Ryhmä</th>
                    <th>Tehdyt tehtävät</th>
                </thead>
                <tbody>{userit}</tbody>
            </table>
        );
    }
}

export default Users;