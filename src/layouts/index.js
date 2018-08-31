import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Carousel from '../components/carousel'

import './index.css'
import favicon from '../../public/favicon.ico'

// EXTERNAL IMPORTS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap-theme.min.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Harmony Laser - Web Oficial' },
        { name: 'keywords', content: 'laser, harmony, depilación' },
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/ico', href: `${favicon}` }
      ]}
    />
    <Navbar />
    <div
      style={{
        'margin-top': '71px'
      }}
    >
    </div>
    <Carousel />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
      className={'content'}
    >
      {children()}
    </div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQueryIndex {
    site {
      siteMetadata {
        title
      }
    }
  }
`
