import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image = () => (
  <StaticQuery
    query={
      graphql`
        query {
          gatsbyImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `
    }
    render={data => <Img fluid={data.gatsbyImage.childImageSharp.fluid} />}
  />
)
export default Image
