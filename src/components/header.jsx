/** @jsx jsx */
import { jsx, Grid, Link } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

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
        zIndex: 1,
        marginTop: 2,
        justifyItems: 'center',
        position: ['relative', 'relative', null],
      }}
      columns={[2, 2, 3]}
    >

      <Link
        as={AnchorLink}
        sx={{
          variant: 'text.signPost',
          outline: 'none',
          '&:hover': {
            textDecoration: 'none',
          },
        }}
        title="Start of Jade's Portfolio"
        role="link"
        to="/#intro"
        tabIndex={-1}
      >
        {data.site.siteMetadata.author}
      </Link>

      <div
        sx={{
          variant: 'text.hardCaption',
          width: '320px',
          display: ['none', 'none', 'block'],
          ariaHidden: ['true', 'true', 'false'],
        }}
      >
        {data.site.siteMetadata.statusUpdate}
        <Link
          as={AnchorLink}
          sx={{
            textDecoration: 'underline',
            color: 'plum',
          }}
          to="/#contact"
          tabIndex={0}
        >
          Get in touch!
        </Link>
      </div>

      <nav
        role="navigation"
        aria-label="Main"
        sx={{
          variant: 'text.signPost',
          lineHeight: ['32px', '32px', '26px'],
        }}
      >
        <Link
          as={AnchorLink}
          to="/#my-work"
          tabIndex={0}
        >
          Work
        </Link>
        <br />
        <Link
          as={AnchorLink}
          to="/#contact"
          tabIndex={0}
        >
          Contact
        </Link>
      </nav>
    </Grid>
  );
};

export default Header;
