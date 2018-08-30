import React, {Component} from 'react';
import axios from 'axios';

class Users extends Component{
    state = {users: []};

    getUsers = () => {
        this.componentDidMount();
    }

    componentDidMount() {
        axios.get("/users")
            .then(res => {
                const users = res.data;
                console.log(users);
                this.setState({users});
            })
    }

    render() {
        const usersdata = this.state.users;
        const userit = usersdata.map((user) => {
            return <tr key={user._id}>
                <td>{user.username}</td>
                <td>{user.id}</td>
                <td>{user.role}</td>
                <td>{user.points}</td>
                <td>{user.groupId}</td>
                <td>{user.completedTask}</td>
            </tr>
        });
        return (
            <table className='users'>
                <thead>
                <tr>
                    <td>userName</td>
                    <td>userID</td>
                    <td>role</td>
                    <td>points</td>
                    <td>groupId</td>
                    <td>completedTasks</td>
                </tr>
                </thead>
                <tbody>{userit}</tbody>
            </table>
        );
    }

}

export default Users;