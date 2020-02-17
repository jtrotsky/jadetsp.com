/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const Background = ({ children, color, image }) => (
  <div
    sx={{
      backgroundColor: String(color),
      backgroundImage: `url(${image})`,
      backgroundSize: ['auto', 'auto', '100%'],
    }}
  >
    {children}
  </div>
);

Background.defaultProps = {
  color: '',
  image: '',
};

Background.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  image: PropTypes.string,
};

export default Background;
