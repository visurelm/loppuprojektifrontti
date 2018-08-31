import React, {Component} from 'react';
import Auth from '../Authentication/Auth';

export default class LoadingCallback extends Component{
    componentDidMount(){
        const auth = new Auth();
        auth.handleAuthentication();
    }

    render(){
        return(
            <div>
                Kirjaudutaan sisään...
            </div>
        )
    }
}