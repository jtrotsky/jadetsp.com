/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const Block = ({ paragraphOne, paragraphTwo }) => (
  <div
    sx={{
      maxWidth: 391,
      maxHeight: 705,
      variant: 'text.pugBoi',
    }}
  >

    <div
      sx={{
        paddingTop: '20px',
      }}
    >
      {paragraphOne}
    </div>

    <div
      sx={{
        paddingTop: '50px',
      }}
    >
      {paragraphTwo}
    </div>
  </div>
);

Block.defaultProps = {
  paragraphOne: '',
  paragraphTwo: '',
};

Block.propTypes = {
  paragraphOne: PropTypes.string,
  paragraphTwo: PropTypes.string,
};

export default Block;
