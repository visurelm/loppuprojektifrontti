import React, {Component} from 'react';
import axios from "axios";

class ListGroupsBundles extends Component {

    state = {bundles: []};

    getAllMissions = () => {
        this.componentDidMount();
    };

    // componentDidMount() {
    //     console.log(localStorage.getItem("access_token"));
    //     axios.defaults.headers.common = {
    //         Authorization: "Bearer " + localStorage.getItem("access_token")
    //     };
    //     axios.get("/missionbundles/group/" + this.props.groupid)
    //         .then(res => {
    //             const bundles = res.data;
    //             this.setState({bundles:bundles});
    //         });
    // };

    render() {
        console.log(this.props.groupid);
        const bundlesdata = Array.isArray(this.props.bundles) ? this.props.bundles : [this.props.bundles];
        console.log(bundlesdata)
        const bundles = bundlesdata.map((bundle) => {
            let link = "/missionbundle/" + bundle.bundleid;
            console.log("Wrapperissä",bundle)
            return (<tr key={bundle.id}>
                {/*<td>{bundle._id}</td>*/}
                <td><a href={link}>{bundle.bundlename}</a></td>
                {Array.isArray(bundle.listofmissions)?<td>{bundle.listofmissions.length}</td>:undefined}
            </tr>)
        });

        return (
            <div>
                <table className='missions'>
                    <thead>
                    <tr>
                        {/*<td>Mission ID</td>*/}
                        <td>Tehtävänipun nimi</td>
                        <td>Tehtävien lukumäärä</td>
                    </tr>
                    </thead>
                    <tbody>{bundles}</tbody>
                </table>
            </div>
        );
    }
}

export default ListGroupsBundles;
