import React from 'react';
import Layout from '../components/Layout.jsx';
import GatsbyImage from '../components/GatsbyImage.jsx';

const NotFoundPage = () => (
  <Layout>
    <main>
      <h1>404 NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <GatsbyImage />
    </main>
  </Layout>
);

export default NotFoundPage;
