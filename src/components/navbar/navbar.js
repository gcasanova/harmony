import React from 'react'
import Link from 'gatsby-link'
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';

import './navbar.css';

import logoImage from '../../../public/images/navbar-logo.png'
import facebookLogoImage from '../../../public/images/facebook-logo.svg'
import facebookLogoImageBlack from '../../../public/images/facebook-logo-black.svg'
import instagramLogoImage from '../../../public/images/instagram-logo.png'
import instagramLogoImageBlack from '../../../public/images/instagram-logo-black.png'
import whatsappLogoImage from '../../../public/images/whatsapp-logo.png'
import whatsappLogoImageBlack from '../../../public/images/whatsapp-logo-black.png'

class myNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hoveringFacebook: false,
      hoveringInstagram: false,
      hoveringWhatsapp: false
    }
  }

  render() {
    const facebookLogoStyle = {
      display: 'inline-block',
      width: '32px',
      height: '32px',
      'margin-top': '7px',
      'background-size': '32px 32px',
      'margin-left': '15px',
      backgroundImage: `url(${this.state.hoveringFacebook ?
        facebookLogoImage :
        facebookLogoImageBlack})`
    };

    const instagramLogoStyle = {
      display: 'inline-block',
      width: '32px',
      height: '32px',
      'margin-top': '7px',
      'background-size': '32px 32px',
      'margin-left': '15px',
      backgroundImage: `url(${this.state.hoveringInstagram ?
        instagramLogoImage :
        instagramLogoImageBlack})`
    };

    const whatsappLogoStyle = {
      display: 'inline-block',
      width: '33px',
      height: '33px',
      'margin-top': '7px',
      'background-size': '33px 33px',
      'margin-left': '40px',
      backgroundImage: `url(${this.state.hoveringWhatsapp ?
        whatsappLogoImage :
        whatsappLogoImageBlack})`
    };

    const handleMouseEnterFacebook = () => this.setState({ hoveringFacebook: true });
    const handleMouseLeaveFacebook = () => this.setState({ hoveringFacebook: false });

    const handleMouseEnterInstagram = () => this.setState({ hoveringInstagram: true });
    const handleMouseLeaveInstagram = () => this.setState({ hoveringInstagram: false });

    const handleMouseEnterWhatsapp = () => this.setState({ hoveringWhatsapp: true });
    const handleMouseLeaveWhatsapp = () => this.setState({ hoveringWhatsapp: false });

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
            <a href='https://www.whatsapp.com' onMouseEnter={handleMouseEnterWhatsapp}
              onMouseLeave={handleMouseLeaveWhatsapp} style={whatsappLogoStyle} target='_blank' />
            <a href='https://www.facebook.com' onMouseEnter={handleMouseEnterFacebook}
              onMouseLeave={handleMouseLeaveFacebook} style={facebookLogoStyle} target='_blank' />
            <a href='https://www.instagram.com' onMouseEnter={handleMouseEnterInstagram}
              onMouseLeave={handleMouseLeaveInstagram} style={instagramLogoStyle} target='_blank' />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default myNavbar;
