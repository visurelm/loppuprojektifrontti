import React, {Component} from 'react';
import axios from "axios/index";

export default class SignUpPage extends Component {
    state = {email: "", username: "", password: ""};

    typeEmail = (ev) => {
        this.setState({email:ev.target.value});
    };

    typeUsername = (ev)=>{
        this.setState({username:ev.target.value});
    };

    typePassword = (ev)=>{
        this.setState({password:ev.target.value});
    };

    send = ()=>{
        this.props.auth.signUpStudent(this.state.username,this.state.password,this.state.email);

    };



    render() {
        return <div>
            <input onChange={this.typeEmail} placeholder="Sähköposti" />
            <input onChange={this.typeUsername} placeholder="Käyttäjänimi" required="required" minLength="4"/>
            <input onChange={this.typePassword} placeholder="Salasana" type="password" required="required" minLength="4"/>
            <button onClick={this.send}>Rekisteröi</button>
        </div>
    };
}