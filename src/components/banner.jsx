/** @jsx jsx */
import { jsx, Grid } from 'theme-ui';
import PropTypes from 'prop-types';

const Banner = ({ quote, children }) => (
  <Grid
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    columns={1}
  >
    <div
      sx={{
        my: [2, 2, 3],
        mx: 1,
      }}
    >
      <h1
        sx={{
          variant: ['text.smolBoi', 'text.smolBoi', 'text.chooChooBoi'],
          color: 'background',
          maxWidth: '680px',
          textAlign: 'center',
        }}
      >
        {quote}
      </h1>
      <div
        sx={{
          my: 1,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {children}
      </div>
    </div>
  </Grid>
);

Banner.defaultProps = {
  children: '',
};

Banner.propTypes = {
  quote: PropTypes.string.isRequired,
  children: PropTypes.node,
};


export default Banner;
