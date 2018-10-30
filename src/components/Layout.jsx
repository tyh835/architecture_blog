import React from 'react';
import PropTypes from 'prop-types';
import Helmet from './Helmet.jsx';

import '../scss/reset.scss';
import '../scss/style.scss';

const Layout = ({ children }) => (
  <>
    <Helmet />
    <div id="app">
      {children}
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
