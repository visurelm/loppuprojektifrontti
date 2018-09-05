import React, {Component} from 'react';
import ListAllMissions from './ListAllMissions';
import ListAllGroups from './ListAllGroups';
import AddUser from '../images/add-user.svg';
import CMB from '../images/clipboard.svg';
import '../css/elsa.css';


class TeachersView extends Component {

    render() {

        return (
            <div>

                <a href="/CreateMissionBundle" ><img src={CMB} className="image2"/><span className="span2">Lisää tehtävänippu</span></a>
                <a href="/SingUpPage" ><img src={AddUser} className="image2"/><span className="span2">Lisää käyttäjä</span></a>

                <ListAllGroups/>
                <ListAllMissions/>
            </div>
        );
    }
}

export default TeachersView;