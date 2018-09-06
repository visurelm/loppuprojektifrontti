import React,{Component} from 'react'
import axios from "axios/index";
import SumGame from '../games/sumgame/Sumgame';

export default class ChooseGame extends Component{

    status = {user:{}};

    componentWillMount() {
        axios.defaults.headers.common = {
            Authorization: "Bearer " + localStorage.getItem("access_token")
        };
        axios.get("/api/user")
            .then(res=>{
                console.log(res.data)
            });
    }

    

    render(){
        let maincomponent = {};
        console.log(this.props.match.params)
        switch (this.props.match.params.gamename){
            case "sumgame":
                maincomponent = <SumGame auth={this.props.auth} />;
            case "moi":
                maincomponent = <p>Moi</p>
        }
        console.log(maincomponent)
        
        return (
            <SumGame auth={this.props.auth} />
        );
    }
}