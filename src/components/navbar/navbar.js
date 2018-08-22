import React from 'react'
import Link from 'gatsby-link'
import { I18n } from 'react-i18next';
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';

import './navbar.css';
// import tizkanImage from '../../images/tizkan.png';

// Import a pre-configured instance of i18next
import i18n from '../../i18n';

const myNavbar = () => (
  <I18n wait={true}>
    {
      (t, { i18n }) => (
        <Navbar ref='navbar' fixedTop>
          <Navbar.Header>
            {/* <Image src={tizkanImage} responsive /> */}
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem>
                <Link to="/">{t('navbar.inicio')}</Link>
              </NavItem>
              <NavItem>
                <Link to="/laser">{t('navbar.laser')}</Link>
              </NavItem>
              <NavItem>
                <Link to="/conocenos">{t('navbar.conocenos')}</Link>
              </NavItem>
              <NavItem>
                <Link to="/precios">{t('navbar.precios')}</Link>
              </NavItem>
              <NavItem>
                <Link to="/contacto">{t('navbar.contacto')}</Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
    }
  </I18n>
)

export default myNavbar;
