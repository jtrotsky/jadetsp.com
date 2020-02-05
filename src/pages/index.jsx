import React from 'react';

import Layout from '../components/layout';
import Landing from '../components/landing';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Jade Tan" />
    <Landing />
  </Layout>
);

export default IndexPage;
