/** @jsx jsx */
import { jsx, Grid } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
            statusUpdate
          }
        }
      }`,
  );

  return (
    <Grid
      sx={{
        marginTop: 2,
        justifyItems: 'center',
      }}
      columns={[2, 2, 3]}
    >

      <span
        sx={{
          variant: 'text.signPost',
        }}
      >
        <a
          href="#intro"
          sx={{
            textDecoration: 'none',
            color: 'text',
          }}
        >
          {data.site.siteMetadata.author}
        </a>
      </span>

      <div
        sx={{
          variant: 'text.hardCaption',
          width: '320px',
          display: ['none', 'none', 'block'],
        }}
      >
        {data.site.siteMetadata.statusUpdate}
        <a style={{ color: '#000' }} href="#contact">Get in touch!</a>
      </div>

      <span
        sx={{
          variant: 'text.signPost',
        }}
      >
        <a
          href="#about"
          sx={{
            textDecoration: 'none',
            color: 'text',
          }}
        >
          About
        </a>
        <br />
        <a
          href="#my-work"
          sx={{
            textDecoration: 'none',
            color: 'text',
          }}
        >
          Work
        </a>
        <br />
        <a
          href="#contact"
          sx={{
            textDecoration: 'none',
            color: 'text',
          }}
        >
          Contact
        </a>
        <br />
      </span>
    </Grid>
  );
};

export default Header;
