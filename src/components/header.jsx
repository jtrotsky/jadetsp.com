/** @jsx jsx */
import { jsx, Grid, NavLink } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
// import Anchor from './common/anchor';

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
        <span
          sx={{
            color: '#132640',
            cursor: 'pointer',
          }}
          role="menuitem"
          onClick={() => scrollTo('#intro')}
          tabIndex={0}
          onKeyPress={() => scrollTo('#intro')}
        >
          {data.site.siteMetadata.author}
        </span>
      </span>

      <div
        sx={{
          variant: 'text.hardCaption',
          width: '320px',
          display: ['none', 'none', 'block'],
        }}
      >
        {data.site.siteMetadata.statusUpdate}
        <span
          sx={{
            color: '#132640',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
          role="button"
          onClick={() => scrollTo('#contact')}
          tabIndex={0}
          onKeyPress={() => scrollTo('#contact')}
        >
          Get in touch!
        </span>
      </div>

      <div
        as="nav"
        sx={{
          variant: 'text.signPost',
        }}
      >
        <NavLink
          sx={{
            color: '#132640',
            cursor: 'pointer',
          }}
          role="menuitem"
          onClick={() => scrollTo('#intro')}
          tabIndex={0}
          onKeyPress={() => scrollTo('#intro')}
        >
          About
        </NavLink>
        <br />
        <NavLink
          sx={{
            color: '#132640',
            cursor: 'pointer',
          }}
          role="menuitem"
          onClick={() => scrollTo('#my-work')}
          tabIndex={0}
          onKeyPress={() => scrollTo('#my-work')}
        >
          Work
        </NavLink>
        <br />
        <NavLink
          sx={{
            color: '#132640',
            cursor: 'pointer',
          }}
          role="menuitem"
          onClick={() => scrollTo('#contact')}
          tabIndex={0}
          onKeyPress={() => scrollTo('#contact')}
        >
          Contact
        </NavLink>
        <br />
      </div>
    </Grid>
  );
};

export default Header;
