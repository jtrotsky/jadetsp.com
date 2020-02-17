/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const Block = ({ paragraphOne, paragraphTwo, children }) => (
  <div
    sx={{
      maxWidth: '560px',
      variant: 'text.smolBoi',
      mx: 1,
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
