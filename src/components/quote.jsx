/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

const Quote = ({ quote, attribution }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            quote
            attribution
          }
        }
      }`,
  );

  const quoteString = quote || data.site.siteMetadata.quote;
  const attributionString = attribution || data.site.siteMetadata.attribution;

  return (
    <div
      sx={{
        maxWidth: '400px',
      }}
    >
      <div
        sx={{
          variant: 'text.smolBoi',
        }}
      >
        {quoteString}
      </div>

      <div
        sx={{
          variant: 'text.softCaption',
          paddingTop: 1,
        }}
      >
        {attributionString}
      </div>
    </div>
  );
};

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  attribution: PropTypes.string.isRequired,
};

export default Quote;