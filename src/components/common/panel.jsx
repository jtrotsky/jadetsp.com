/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const Panel = ({ children }) => (
  <div
    sx={{
      display: 'flex',
    }}
  >
    {children}
  </div>
);

Panel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Panel;
