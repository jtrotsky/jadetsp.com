import PropTypes from 'prop-types';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Anchor = ({ anchor }) => (
  scrollTo(anchor)
);

Anchor.defaultProps = {
  anchor: '',
};

Anchor.propTypes = {
  anchor: PropTypes.string.isRequired,
};

export default Anchor;
