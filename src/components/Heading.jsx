import React from 'react';
import titleImg from '../images/title.png';

const Heading = () => {
  return (
    <header>
      <img src={titleImg} alt="Angles" />
      <p> An architecture blog </p>
    </header>
  );
};

export default Heading;
