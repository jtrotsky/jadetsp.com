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
        {data.site.siteMetadata.author}
      </span>

      <div
        sx={{
          variant: 'text.hardCaption',
          width: '320px',
          display: ['none', 'none', 'block'],
        }}
      >
        {data.site.siteMetadata.statusUpdate}
        <a style={{ color: '#000' }} href="mailto:sweaphin@gmail.com">Get in touch!</a>
      </div>

      <span
        sx={{
          variant: 'text.signPost',
        }}
      >
        About
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
        Contact
        <br />
      </span>
    </Grid>
  );
};

export default Header;
