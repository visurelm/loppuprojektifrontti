import React, {Component} from 'react';
import axios from "axios/index";

export default class SignUpPage extends Component {
    state = {email: "", username: "", password: "", groupid: ""};

    async componentWillMount() {
        axios.defaults.headers.common = {
            Authorization: "Bearer " + localStorage.getItem("access_token")
        };

        await axios.get("/missions")
            .then(res => {
                // missions = res.data;
                console.log("Haetut tehtävät", res.data)
                this.setState({missions: res.data});
                console.log("sduioguhsdoighio", this.state)
            });
    }

    typeEmail = (ev) => {
        this.setState({email: ev.target.value});
    };

    typeUsername = (ev) => {
        this.setState({username: ev.target.value});
    };

    typeGroup = (ev) => {
        this.setState({groupid: ev.target.value});
    };

    typePassword = (ev) => {
        this.setState({password: ev.target.value});
    };

    send = () => {
        this.props.auth.signUpStudent(this.state.username, this.state.password, this.state.email, this.state.groupid);

    };


    render() {

        return <div>
            <input onChange={this.typeEmail} placeholder="Sähköposti"/><br/>
            <input onChange={this.typeUsername} placeholder="Käyttäjänimi" required="required" minLength="4"/><br/>
            <input onChange={this.typePassword} placeholder="Salasana" type="password" required="required"
                   minLength="4"/><br/>
            <input onChange={this.typeGroup} placeholder="Ryhmä"/> <br/>
            <button onClick={this.send} className="playbuttons">Rekisteröi</button>
        </div>
    };
}