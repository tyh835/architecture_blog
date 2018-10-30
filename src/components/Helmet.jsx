import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
  >
    {data => (
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          {
            property: 'og:title',
            content: 'Architecture Blog'
          },
          {
            name: 'theme-color',
            content: '#fefefe'
          },
          {
            name: 'description',
            content:
              'This is a simple Architectural Blog/Gallery built using Gatsby Images and CSS-Grid'
          },
          {
            name: 'keywords',
            content: 'architecture, blog, css, grid, image, gatsby'
          }
        ]}
      >
        <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700|Roboto+Slab:300,400" rel="stylesheet" />
        <html lang="en" />
      </Helmet>
    )}
  </StaticQuery>
);