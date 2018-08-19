import React from 'react'
import Link from 'gatsby-link'
import { I18n } from 'react-i18next'

// Import a pre-configured instance of i18next
import i18n from '../i18n'

const Header = ({ siteTitle }) => (
  <I18n>
    {
      (t, { i18n }) => (
        <div
          style={{
            background: 'rebeccapurple',
            marginBottom: '1.45rem',
          }}
        >
          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '1.45rem 1.0875rem',
            }}
          >
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                {t('contactUs')}
              </Link>
            </h1>
          </div>
        </div>
      )
    }
  </I18n>
)

export default Header
