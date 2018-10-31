import React from 'react';
import Img from 'gatsby-image';

const Grid = ({ data }) => {
  return (
    <main className="grid">
      <div className="a__image">
        <Img
          fluid={data.image1.childImageSharp.fluid}
          alt="Hamburg, Germany. Repurposed Housing"
        />
      </div>
      <div className="a__title">Repurposed Living</div>
      <div className="a__subtitle">
        Bassicarella Architectes, Hamburg, Germany Repurposed Housing
      </div>

      <div className="b__image">
        <Img
          fluid={data.image2.childImageSharp.fluid}
          alt="Madrid, Spain. Office Building"
        />
      </div>
      <div className="b__title">Angles de Pyramid Interiors</div>
      <div className="b__subtitle">
        Bassicarella Architectes, Madrid, Spain Office Building
      </div>

      <div className="c__image">
        <Img
          fluid={data.image3.childImageSharp.fluid}
          alt="Dubai, UAE Museum"
        />
      </div>
      <div className="c__title">Intricate Patter Play</div>
      <div className="c__subtitle">
        Bassicarella Architectes, Dubai, UAE Museum
      </div>

      <div className="d__image">
        <Img
          fluid={data.image4.childImageSharp.fluid}
          alt="Beijing, China. Temple"
        />
      </div>
      <div className="d__title">Healing House Path</div>
      <div className="d__subtitle">
        Bassicarella Architectes, Beijing, China Temple
      </div>

      <div className="e__image">
        <Img
          fluid={data.image5.childImageSharp.fluid}
          alt="Buenos Aires, Argentina. Condominium"
        />
      </div>
      <div className="e__title">Curved Perfection</div>
      <div className="e__subtitle">
        Bassicarella Architectes, Buenos Aires, Argentina Condominium
      </div>
      <footer>By Tony Han</footer>
    </main>
  );
};

export default Grid;
