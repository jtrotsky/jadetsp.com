import React from 'react';
import { Grid } from 'theme-ui';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <div>
    <Grid
      columns={1}
    >
      <main>
        {children}
      </main>
    </Grid>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
