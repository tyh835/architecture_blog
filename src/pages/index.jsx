import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout.jsx';
import Heading from '../components/Heading.jsx';
import Grid from '../components/Grid.jsx';

const IndexPage = ({ data }) => (
  <Layout>
    <Heading />
    <Grid data={data} />
  </Layout>
);

export default IndexPage;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const imageQuery = graphql`
  query imageQuery {
    image1: file(relativePath: { eq: "image1.jpg" }) {
      ...fluidImage
    }

    image2: file(relativePath: { eq: "image2.jpg" }) {
      ...fluidImage
    }

    image3: file(relativePath: { eq: "image3.jpg" }) {
      ...fluidImage
    }

    image4: file(relativePath: { eq: "image4.jpg" }) {
      ...fluidImage
    }

    image5: file(relativePath: { eq: "image5.jpg" }) {
      ...fluidImage
    }
  }
`;
