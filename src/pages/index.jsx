import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout.jsx';

import title from '../images/title.png';

const IndexPage = ({ data }) => (
  <Layout>
    <div className="headline">
      <img src={title} alt="Angles" />
      <p> An architecture blog </p>
    </div>
    <div className="grid">
      <div className="box a">
        <Img fluid={data.image1.childImageSharp.fluid} alt="Hamburg, Germany. Repurposed Housing" />
      </div>
      <div className="box b title">
        Repurposed Living
      </div>
      <div className="box c subtitle">
        Bassicarella Architectes, Hamburg, Germany Repurposed Housing
      </div>

      <div className="box d">
        <Img fluid={data.image2.childImageSharp.fluid} alt="Madrid, Spain. Office Building" />
      </div>
      <div className="box e title">
        Angles de Pyramid Interiors
      </div>
      <div className="box f subtitle">
        Bassicarella Architectes,
        Madrid, Spain
        Office Building
      </div>

      <div className="box g">
        <Img fluid={data.image3.childImageSharp.fluid} alt="Dubai, UAE Museum" />
      </div>
      <div className="box h title">
        Intricate Patter Play
      </div>
      <div className="box i subtitle">
        Bassicarella Architectes, Dubai, UAE Museum
      </div>
      <div className="box j">
        <Img fluid={data.image4.childImageSharp.fluid} alt="Beijing, China. Temple" />
      </div>
      <div className="box k title">
        Healing House Path
      </div>
      <div className="box l subtitle">
        Bassicarella Architectes,
        Beijing, China
        Temple
      </div>
      <div className="box m">
        <Img fluid={data.image5.childImageSharp.fluid} alt="Buenos Aires, Argentina. Condominium" />
      </div>
      <div className="box n title">
        Curved Perfection
      </div>
      <div className="box o subtitle">
        Bassicarella Architectes,
        Buenos Aires, Argentina
        Condominium
      </div>
      <footer>By Tony Han</footer>
    </div>
  </Layout>
);

export default IndexPage;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
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