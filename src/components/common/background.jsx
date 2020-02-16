/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import VendTeam from '../../images/img-vend-team.png'

const Background = ({ children, color }) => (
  <div
    sx={{
      backgroundColor: String(color),
      // backgroundImage: VendTeam,
    }}
  >
    {children}
  </div>
);

Background.defaultProps = {
  color: 'background',
  // overlay: '',
};

Background.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  // overlay: PropTypes.string,
};

export default Background;
