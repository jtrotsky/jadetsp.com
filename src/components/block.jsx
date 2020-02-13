/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const Block = ({ paragraphOne, paragraphTwo }) => (
  <div
    sx={{
      maxWidth: '503px',
      variant: 'text.smolBoi',
    }}
  >

    <div>
      {paragraphOne}
    </div>
    <br />
    <div>
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
