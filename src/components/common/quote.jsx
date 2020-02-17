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
      mx: 1,
      maxWidth: '580px',
      color: 'background',
    }}
  >

    <div
      sx={{
        variant: 'text.pugBoi',
        marginLeft: '8px',
      }}
    >

      <div
        sx={{
          variant: 'text.pugBoi',
        }}
      >
        <div
          sx={{
            position: 'absolute',
            textIndent: '-34px',
          }}
        >
          &ldquo;
        </div>
        {quote}
        &rdquo;
      </div>
    </div>

    <div
      sx={{
        my: 1,
        marginLeft: '8px',
      }}
    >
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
  </div>
);

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  formerly: PropTypes.string.isRequired,
};

export default Quote;
