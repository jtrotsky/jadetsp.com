/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const Background = ({ children, color }) => (
  <div
    sx={{
      backgroundColor: String(color),
    }}
  >
    {children}
  </div>
);

Background.defaultProps = {
  color: '',
};

Background.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

export default Background;
