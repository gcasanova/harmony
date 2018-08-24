import React from 'react'
import Link from 'gatsby-link'

import './footer.css';

const Footer = () => (
    <div>
        <div className={'text-center footer-wrap'}>
            <h6>©2018 Harmony Laser &amp; Beauty. Todos los derechos reservados.</h6>
            <p><Link to="/politica-de-cookies">Politica de Cookies</Link> | <Link to="/nota-legal">Nota Legal</Link></p>
        </div>
    </div>
)

export default Footer
