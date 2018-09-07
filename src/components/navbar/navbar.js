import React from 'react'
import Link from 'gatsby-link'
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';

import './navbar.css';

import logoImage from '../../../public/images/navbar-logo.png'
import facebookLogoImage from '../../../public/images/facebook-logo.svg'
import facebookLogoImageBlack from '../../../public/images/facebook-logo-black.svg'

class myNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hovering: false
    };
  }

  render() {
    const facebookLogoStyle = {
      display: 'inline-block',
      width: '32px',
      height: '32px',
      'margin-left': '40px',
      'margin-top': '7px',
      backgroundImage: `url(${this.state.hovering ?
        facebookLogoImage :
        facebookLogoImageBlack})`
    };

    const handleMouseEnter = () => this.setState({ hovering: true });
    const handleMouseLeave = () => this.setState({ hovering: false });

    return (
      <Navbar fixedTop collapseOnSelect>
        <Navbar.Header>
          <Link to='/'><Image width={180} src={logoImage} /></Link>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem>
              <Link to='/' exact>INICIO</Link>
            </NavItem>
            <NavItem>
              <Link to='/laser' exact>LASER</Link>
            </NavItem>
            <NavItem>
              <Link to='/precios' exact>PRECIOS</Link>
            </NavItem>
            <NavItem>
              <Link to='/contacto' exact>CONTACTO</Link>
            </NavItem>
            <a href='https://www.facebook.com' onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave} style={facebookLogoStyle} target='_blank' />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default myNavbar;
