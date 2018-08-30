import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class Navigation extends Component {
    render() {
        return (
            <Navbar staticTop>
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
                        <NavItem eventKey={3} href="/Jermuiluja">Jermujen pesä</NavItem>
                        <NavDropdown eventKey={5} title="Tähn tulee pelit" id="pelidropdown"></NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;
