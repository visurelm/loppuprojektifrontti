import React, {Component} from 'react';
import axios from "axios/index";

export default class NotFound extends Component {
    state = {user: null}
    componentDidMount() {
        axios.defaults.headers.common = {
            Authorization: "Bearer " + localStorage.getItem("access_token")
        };
        axios.get("/api/user")
            .then(res => {
                console.log(localStorage.getItem("access_token"));
                const user = res.data;
                console.log("USER", user);
                this.setState({user: user.name});
            })
    }

    render(){
        return (
            <div>
                Oh noes, not found...
                <p style={{'color': 'red0'}}>User: {this.state.user || 'Ei ole (vielä)'}</p>
            </div>
        )
    }
}