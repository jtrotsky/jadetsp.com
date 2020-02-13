/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const Section = ({ children }) => (
  <div>
    {children}
  </div>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
