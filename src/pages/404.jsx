import React from 'react';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <h1>404 NOT FOUND</h1>
    <p>
      That route doesn&#39;t exist...
      &nbsp;
      <a href="/">Click here for homepage.</a>
    </p>
  </>
);

export default NotFoundPage;
