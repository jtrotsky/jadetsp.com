/** @jsx jsx */
import { jsx, Themed } from 'theme-ui';
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
        marginLeft: '8px',
      }}
    >
      <div
        sx={{
          variant: 'text.smolBoi',
          marginBottom: '16px',
        }}
      >
        <div
          sx={{
            position: 'absolute',
            textIndent: '-26px',
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
        my: 0,
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
