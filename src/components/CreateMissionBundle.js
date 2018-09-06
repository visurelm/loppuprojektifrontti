import React, {Component} from 'react';
import axios from "axios";

class CreateMissionBundle extends Component {

    state = {missions: [], newbundle: {names: [], ids: []}, mygroups: [], name: "",targetgroup:[]}

    setNewMissionInto = (ev) => {
        const row = ev.target.parentNode.parentNode.rowIndex;
        let bundlemissionids = this.state.newbundle.ids;
        bundlemissionids.push(this.state.missions[row].id);
        let bundlemissionnames = this.state.newbundle.names;
        bundlemissionnames.push(this.state.missions[row].missionname)
        this.setState({newbundle: {names: bundlemissionnames, ids: bundlemissionids}}, console.log(this.state));
    };

    deleteFromNewBundle = (ev) => {
        const row = ev.target.parentNode.parentNode.rowIndex;
        ev.stopPropagation();
        let id = this.state.missions[row].id;
        let name = this.state.missions[row].missionname;
        let bundlemissionids = this.state.newbundle.ids.filter(mission => mission != id);
        let bundlemissionnames = this.state.newbundle.names.filter(mission => mission != name);
        this.setState({newbundle: {names: bundlemissionnames, ids: bundlemissionids}}, console.log(this.state));
    };

    setTargetGroup = (ev) => {
        const row = ev.target.parentNode.parentNode.rowIndex;
        let groups = this.state.targetgroup;
        groups.push(this.state.mygroups[row].groupid);
        this.setState({targetgroup:groups},console.log(this.state));
    };

    deleteTargetGroup = (ev)=>{
        const row = ev.target.parentNode.parentNode.rowIndex;
        let groupid = this.state.mygroups[row].groupid;
        let newGroups = this.state.targetgroup.filter(id=>id!==groupid);
        this.setState({targetgroup:newGroups});
    };

    deleteFromNewBundle = (ev) => {
        const row = ev.target.parentNode.parentNode.rowIndex;
        ev.stopPropagation();
        let id = this.state.missions[row].id;
        let name = this.state.missions[row].missionname;
        let bundlemissionids = this.state.newbundle.ids.filter(mission => mission != id);
        let bundlemissionnames = this.state.newbundle.names.filter(mission => mission != name);
        this.setState({newbundle: {names: bundlemissionnames, ids: bundlemissionids}}, console.log(this.state));
    };

    getMissions = () => {
        this.componentDidMount();
    };

    componentDidMount() {
        axios.defaults.headers.common = {
            Authorization: "Bearer " + localStorage.getItem("access_token")
        };

        axios.get("/missions")
            .then(res => {
                let missions = res.data;
                console.log(missions);
                this.setState({missions: missions});
            });
        axios.get("/api/user")
            .then(res => {
                return res.data;
            })
            .then(res => {
                    axios.get("/users/" + res.name)
                        .then(res => {
                                let user = res.data;
                                console.log("Käyttäjä", user.role)
                                //TODO jos user.username==null niin ohjaa johonkin.
                                if (user.username !== null && user.role === "Teacher") {
                                    axios.get("/groups")
                                        .then((r) => {
                                            this.setState({mygroups: r.data})
                                        })
                                }
                            }
                        )
                }
            );
    }

    typeBundleName = (ev) => {
        this.setState({name: ev.target.value});
    };

    send = async ()=>{
        let toSend = {belongstogroups:this.state.targetgroup,listofmissions:this.state.newbundle.ids,bundlename:this.state.name};
        axios.defaults.headers.common = {
            Authorization: "Bearer " + localStorage.getItem("access_token")
        };
        await axios.post("/missionbundles",toSend)
        .then(()=>{window.location="/TeachersView"})
    }


    render() {
        const missionsdata = this.state.missions;
        const missionsmap = missionsdata.map((mission) => {
            // console.log("tila", this.state)
            return (
                <tr key={mission.id}>
                    {/*<td>{mission.id}</td>*/}
                    <td>{mission.missionname} </td>
                    {/*<td>{mission.componentname}</td>*/}
                    {!this.state.newbundle.ids.includes(mission.id) ?
                        <td>
                            <button onClick={this.setNewMissionInto}>Lisää tehtävänippuun</button>
                        </td> :
                        <td>
                            <button onClick={this.deleteFromNewBundle}>Poista</button>
                        </td>}
                </tr>)
        });
        const newBundlenames = this.state.newbundle.names;
        const bundlemap = newBundlenames.map((mission) => {
            return (
                <tr key={mission}>
                    <td>{mission}</td>
                </tr>)
        });

        const groupsDropdown = this.state.mygroups.map(group => {
            console.log("TargetGroup",this.state.targetgroup)
            console.log("Tutkittavan id",group.groupid);
            console.log(this.state.targetgroup.includes(group.groupid));
                return (
                    <tr>
                        <td>{group.groupname}</td>
                        <td>{this.state.targetgroup.includes(group.groupid) ? <button onClick={this.deleteTargetGroup}>Poista</button> : <button onClick={this.setTargetGroup}>Lisää</button>}</td>
                    </tr>
                    // <option onClick={this.changeTargetGroup} value={group.groupid}>{group.groupname}</option>
                );
            }
        );


        return (
            <div>
                <div>
                    <h3>Tehtävänipun nimi</h3>
                    <input value={this.state.name} onChange={this.typeBundleName}/>
                    <h3>Ryhmä</h3>
                    <table><tbody> {groupsDropdown}</tbody></table>
                </div>
                <div className="missions">
                    <table>
                        <thead>
                            {/*<th>Tehtävän ID</th>*/}
                            <th>Tehtävän nimi</th>
                            {/*<th>sdngoiah</th>*/}
                        </thead>
                        <tbody>{missionsmap}</tbody>
                    </table>
                </div>
                <div className="newbundle">
                    <h3>Valitut tehtävät</h3>
                    <table>
                        <thead>
                            <th>Tehtävän nimi</th>
                        </thead>
                        <tbody>{bundlemap}</tbody>
                    </table>
                </div>
                <button onClick={this.send} className="playbuttons">Luo tehtävänippu</button>


            </div>
        );
    }
}

export default CreateMissionBundle;