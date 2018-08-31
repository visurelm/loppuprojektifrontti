import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class Navigation extends Component {
    render() {
        return (
            <Navbar staticTop inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Etusivu</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/">Etusivu</NavItem>
                        <NavItem eventKey={2} href="/Users">Users</NavItem>
                        <NavItem eventKey={3} href="/MyOwnPage">Samoin tähän</NavItem>
                        <NavItem eventKey={4} href="/TeachersView">Open oma</NavItem>
                        <NavItem eventKey={5} href="/Jermuiluja">Jermujen pesä</NavItem>
                        <NavDropdown eventKey={6} title="Tähän tulee pelit" id="pelidropdown">
                            <MenuItem eventKey={6.1}>Muistipeli</MenuItem>
                            <MenuItem eventKey={6.2} href="/games/sumgame">Summapeli</MenuItem>
                        </NavDropdown>
                        {!this.props.auth.isAuthenticated() &&
                        <button onClick={this.props.auth.login}>Login</button>}
                        {this.props.auth.isAuthenticated() && <button onClick={this.props.auth.logout}>Logout</button>}

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;
