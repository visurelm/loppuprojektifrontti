import React, {Component} from 'react';
import axios from 'axios';
import ListAllMissions from './ListAllMissions';
import ListAllGroups from './ListAllGroups';

class TeachersView extends Component {

    render() {

        return (
            <div>
                <a href="/SingUpPage"><button> Lisää uusi käyttäjä </button></a>
                <p>Tänne tulee ryhmät</p>
                <ListAllGroups/>
                <ListAllMissions/>
            </div>
        );
    }
}

export default TeachersView;