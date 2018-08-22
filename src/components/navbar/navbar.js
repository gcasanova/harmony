import React from 'react'
import Link from 'gatsby-link'
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';

import './navbar.css';

const myNavbar = () => (
  <Navbar fixedTop>
    <Navbar.Header>
      {/* <Image src={tizkanImage} responsive /> */}
    </Navbar.Header>

    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem>
          <Link to="/">INICIO</Link>
        </NavItem>
        <NavItem>
          <Link to="/laser">LASER</Link>
        </NavItem>
        <NavItem>
          <Link to="/conocenos">CONOCENOS</Link>
        </NavItem>
        <NavItem>
          <Link to="/precios">PRECIOS</Link>
        </NavItem>
        <NavItem>
          <Link to="/contacto">CONTACTO</Link>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default myNavbar;
