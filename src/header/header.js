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
import myLogo from '../assets/images/mylogo.png';

const Header = props => {
      let {changeSelection} = props;
        return(
            <div className="header-bg fixed-top">
      <Navbar className="container" expand="md">
        <NavbarBrand href="/"><img src={myLogo} /> <div className="logofont header-logoname">Saravanamani</div></NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="javascript:void(0)" onClick={() => changeSelection(0)}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="javascript:void(0)" onClick={() => changeSelection(1)}>Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="javascript:void(0)" onClick={() => changeSelection(2)}>Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="javascript:void(0)" onClick={() => changeSelection(3)}>Resume</NavLink>
            </NavItem>                        
          </Nav>          
        </Collapse>
      </Navbar>
    </div>
        );    
};

export default Header;