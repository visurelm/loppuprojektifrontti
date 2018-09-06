import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import Elmo from './Elmo';
import Jouni from './Jouni';
import Reija from './Reija';
import Miika from './Miika';
class backgroundcarousel extends Component{

    render() {
        return (
            <div className="backstories">
                <h2>ELSAn tekijöiden tarinat</h2>
                <br/>
                <h4>Jouni Kari</h4>
                <Jouni/>
                <br/>
                <h4>Elmo Visuri</h4>
                <Elmo/>
                <br/>
                <h4>Reija Jokinen</h4>
                <Reija/>
                <br/>
                <h4>Miika Huhtanen</h4>
                <Miika/>
                <br/>
                <h4>undefined</h4>
                <p>undefined refers to something that lacks definition. Important team member in JERMu.</p>
            </div>
        );
    }
}

export default backgroundcarousel;