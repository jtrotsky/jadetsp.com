/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const Banner = ({ children }) => (
  <div
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      backgroundColor: 'clay', // overridden to clay for now
    }}
  >
    {children}
  </div>
);

Banner.propTypes = {
  children: PropTypes.node.isRequired,
};

// Banner.defaultProps = {
//   color: 'clay',
// };

// Banner.propTypes = {
//   color: PropTypes.string,
// };

export default Banner;
