import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';
import './header.css';

class Header extends Component {
    render() {
        return(
            <div className="header-bg">
      <Navbar className="container" expand="md">
        <NavbarBrand href="/">Saravanamani</NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Postfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Skills</NavLink>
            </NavItem>                        
          </Nav>          
        </Collapse>
      </Navbar>
    </div>
        );
    }
};

export default Header;