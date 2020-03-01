/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const Block = ({ paragraphOne, paragraphTwo, children }) => (
  <div
    sx={{
      maxWidth: '440px',
      variant: 'text.smolBoi',
      mx: [0, 0, '8px'],
    }}
  >

    <div>
      {paragraphOne}
    </div>
    <br />
    <div>
      {paragraphTwo}
    </div>
    {children}
  </div>
);

Block.defaultProps = {
  paragraphOne: '',
  paragraphTwo: '',
  children: '',
};

Block.propTypes = {
  paragraphOne: PropTypes.string,
  paragraphTwo: PropTypes.string,
  children: PropTypes.node,
};

export default Block;
