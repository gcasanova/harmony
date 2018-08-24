import React from 'react'
import Link from 'gatsby-link'
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';

import './navbar.css';

import logoImage from '../../../public/images/navbar-logo.png'

class myNavbar extends React.Component {
  render() {
    return (
      <Navbar fixedTop collapseOnSelect>
        <Navbar.Header>
          <Link to="/"><Image width={180} src={logoImage} /></Link>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem>
              <Link to="/" exact>INICIO</Link>
            </NavItem>
            <NavItem>
              <Link to="/laser" exact>LASER</Link>
            </NavItem>
            <NavItem>
              <Link to="/conocenos" exact>CONOCENOS</Link>
            </NavItem>
            <NavItem>
              <Link to="/precios" exact>PRECIOS</Link>
            </NavItem>
            <NavItem>
              <Link to="/contacto" exact>CONTACTO</Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default myNavbar;
