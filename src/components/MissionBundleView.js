import React, {Component} from 'react';
import axios from "axios/index";
import ListGroupsBundles from "./ListGroupsBundles";
import ListBundlesMissions from "./ListBundlesMissions";


export default class MissionBundleView extends Component {

    state = {missionsinbubdle: [], completed: []};

    async componentWillMount() {
        axios.defaults.headers.common = {
            Authorization: "Bearer " + localStorage.getItem("access_token")
        };
        axios.get("/missionbundles/" + this.props.match.params.id)
            .then(
                res => {
                    console.log("Nipun tehtävät:", res.data.listofmissions);
                    this.setState({missionsinbubdle: res.data.listofmissions});
                });
        await axios.get("/api/user")
            .then((res) => {
                console.log("Principal", res.data)
                axios.get("/users/" + res.data.name)
                    .then((r) => {
                        console.log("Kirjautunut käyttäjä:",r.data)
                        this.setState({completed: r.data.completedmissions});
                        console.log("Tila", this.state);
                    })
            });
    }


    render() {
        console.log("Setin tehtävät:", this.state.missionsinbubdle);
        console.log("Tehdyt tehtävät:", this.state.completed);
        return (<div>
            {<ListBundlesMissions missionids={this.state.missionsinbubdle} completed={this.state.completed}/>}
        </div>);
    }
}