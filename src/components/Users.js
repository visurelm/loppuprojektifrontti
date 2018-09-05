import React, {Component} from 'react';
import axios from 'axios';

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
            window.location = "/";
        });
    };

    render() {
        const usersdata = this.state.users;
        const userit = usersdata.map((user) => {
            return <tr key={user._id}>
                <td>{user.username}</td>
                {/*<td>{user.id}</td>*/}
                {/*<td>{user.role}</td>*/}
                {/*<td>{user.points}</td>*/}
                <td>{user.groupid}</td>
                <td>{user.completedmissions}</td>
            </tr>
        });
        return (
            <table className='users'>
                <thead>
                <tr>
                    <td>Käyttäjänimi</td>
                    {/*<td>KäyttäjäID</td>*/}
                    {/*<td>role</td>*/}
                    {/*<td>Pisteet</td>*/}
                    <td>Ryhmä</td>
                    <td>Tehdyt tehtävät</td>
                </tr>
                </thead>
                <tbody>{userit}</tbody>
            </table>
        );
    }
}

export default Users;