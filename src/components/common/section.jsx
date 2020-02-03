/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const Section = ({ children }) => (
  <div
    sx={{
      display: 'flex',
      paddingTop: '400px',
      paddingBottom: '200px',
    }}
  >
    {children}
  </div>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
