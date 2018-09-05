import React, {Component} from 'react';
import axios from 'axios';
import ListAllMissions from './ListAllMissions';
import ListAllGroups from './ListAllGroups';
import AddUser from '../images/add-user.svg';

class TeachersView extends Component {

    render() {

        return (
            <div>
                <a href="/SingUpPage" ><img src={AddUser} className="image2" center/><span className="span2">Lisää käyttäjä</span></a>

                <ListAllGroups/>
                <ListAllMissions/>
            </div>
        );
    }
}

export default TeachersView;