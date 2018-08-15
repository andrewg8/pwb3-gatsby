import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'


const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Andrew Goodridge' },
        { name: 'keywords', content: 'Andrew, Goodridge' },
      ]}
    />
  {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`