import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon} from 'react-bootstrap';
import school from './images/school.svg';
import friends from './images/friends.svg';
import girl from './images/girl.svg';
import teacher from './images/teacher.svg';
import joystick from './images/joystick.svg';
import books from './images/text-books.svg';
import enter from './images/enter.svg';
import exit from './images/exit.svg';

class Navigation extends Component {
    render() {
        return (
            <Navbar staticTop inverse collapseOnSelect nav>
                <Navbar.Header>
                    {/*<Navbar.Brand>*/}
                    {/*</Navbar.Brand>*/}
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <div className="container">
                        <Nav>
                            {/*<div className="overlay">*/}
                                {/*<div className="text">Etusivu</div></div>*/}
                            <NavItem eventKey={1} href="/" ><img src={school} alt="School" className="image"/>Etusivu</NavItem>
                            <NavItem eventKey={2} href="/Users"><img src={friends} alt="Users" className="image"/>Käyttäjät</NavItem>
                            <NavItem eventKey={3} href="/MyOwnPage"><img src={girl} alt="Users" className="girl"/>Omat tiedot</NavItem>
                            <NavItem eventKey={4} href="/TeachersView"><img src={teacher} alt="Teacher" className="teacher"/>Opettajan näkymä</NavItem>
                            <NavItem eventKey={5} href="/games/sumgame"><img src={joystick} alt="Games" className="joystick"/>Summapeli</NavItem>
                            {/*<NavItem eventKey={6} href="/TeachersView">?</NavItem>*/}
                            <NavItem eventKey={7} href="/StoryOfElsa"><img src={books} alt="Users" className="books"/>ELSA</NavItem>

                            {!this.props.auth.isAuthenticated() &&
                            <NavItem eventKey={8} onClick={this.props.auth.login}><img src={enter} alt="Login" className="login"/>Kirjaudu sisään</NavItem>}
                            {this.props.auth.isAuthenticated() &&
                            <NavItem eventKey={9} onClick={this.props.auth.logout}><img src={exit} alt="Logout" className="logout"/>Kirjaudu ulos</NavItem>}
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;
