import React, {Component} from 'react';
import axios from "axios/index";
import ListGroupsBundles from "./ListGroupsBundles";


export default class GroupView extends Component {

    state = {group: {}, missionBundles: {}};

    componentWillMount() {
        axios.defaults.headers.common = {
            Authorization: "Bearer " + localStorage.getItem("access_token")
        };
        axios.get("/groups/" + this.props.match.params.groupid)
            .then((r) => {
                this.setState({group: r.data});
                return r.data.groupid
            })
            .then((groupid) => {
                console.log("Groupid:",groupid)
                axios.get("/missionbundles/group/" + groupid)
                    .then((res)=>{
                        console.log("Ryhmän setit:",res.data);
                        if (Array.isArray(res.data)){
                        this.setState({missionBundles:res.data});
                        } else {
                            this.setState({missionBundles:[res.data]});
                        }
                    })
            });
        axios.get("/missionbundles/" + this)
    }

    listTeachers = ()=>{
        let teachers = Array.isArray(this.state.group.teachers) ? this.state.group.teachers : [this.state.group.teachers];
        let teacherstring = "";
        for (let i=0;i<teachers.length-1;i++){
            teacherstring += (teachers[i] + ", ")
        }
        teacherstring += teachers[teachers.length-1];
        return teacherstring;
    }

    render() {
        return (<div>
            {/*<h1>Ryhmän nimi</h1>*/}
            <h2>{this.state.group.groupname}</h2>
            <div>
                Opettajat: {this.listTeachers()}
            </div>
            {/*<h1>Ryhmän tehtäväsetit</h1>*/}
            <ListGroupsBundles groupid={this.state.group.groupid} bundles={this.state.missionBundles}/>
        </div>);
    }
}