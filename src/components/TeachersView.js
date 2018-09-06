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
                <div>
                    <a href="/CreateMissionBundle"><img src={CMB} className="image2"/></a>
                <p className="image2">Lisää tehtävänippu</p>
                </div>
                <div>
                <a href="/SingUpPage"><img src={AddUser} className="image2"/></a>
                <p className="image2">Lisää käyttäjä</p>
                </div>
                <ListAllGroups/>
                {/*<ListAllMissions/>*/}
            </div>
        );
    }
}

export default TeachersView;