/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const Quote = ({
  quote,
  name,
  role,
  formerly,
}) => (
  <div
    sx={{
      maxWidth: '480px',
      mx: 1,
      my: [4, 4, 3],
      color: 'background',
    }}
  >
    <div
      sx={{
        variant: 'text.pugBoi',
      }}
    >
      &ldquo;
      {quote}
      &rdquo;
    </div>

    <span
      sx={{
        variant: 'text.hardCaption',
      }}
    >
      {name}
      <br />
    </span>

    <span
      sx={{
        variant: 'text.softCaption',
      }}
    >
      {role}
      <br />
      formerly&nbsp;
      {formerly}
    </span>
  </div>
);

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  formerly: PropTypes.string.isRequired,
};

export default Quote;
