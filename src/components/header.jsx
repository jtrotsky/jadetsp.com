/** @jsx jsx */
import {
  jsx, Grid, NavLink, Styled,
} from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';

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

      <NavLink
        sx={{
          outline: 'none',
        }}
        role="link"
        onClick={() => scrollTo('#intro')}
        tabIndex={-1}
        onKeyPress={() => scrollTo('#intro')}
      >
        {data.site.siteMetadata.author}
      </NavLink>

      <div
        sx={{
          variant: 'text.hardCaption',
          width: '300px',
          display: ['none', 'none', 'block'],
        }}
      >
        {data.site.siteMetadata.statusUpdate}
        <Styled.a
          sx={{
            textDecoration: 'underline',
            color: 'plum',
          }}
          role="button"
          rel="preload"
          onClick={() => scrollTo('#contact')}
          tabIndex={0}
          onKeyPress={() => scrollTo('#contact')}
        >
          Get in touch!
        </Styled.a>
      </div>

      <div
        role="navigation"
        aria-label="Main"
      >
        <Styled.a
          as={NavLink}
          role="link"
          rel="preload"
          onClick={() => scrollTo('#intro')}
          tabIndex={0}
          onKeyPress={() => scrollTo('#intro')}
        >
          About
        </Styled.a>
        <br />
        <Styled.a
          as={NavLink}
          role="link"
          rel="preload"
          onClick={() => scrollTo('#my-work')}
          tabIndex={0}
          onKeyPress={() => scrollTo('#my-work')}
        >
          Work
        </Styled.a>
        <br />
        <Styled.a
          as={NavLink}
          role="link"
          rel="preload"
          onClick={() => scrollTo('#contact')}
          tabIndex={0}
          onKeyPress={() => scrollTo('#contact')}
        >
          Contact
        </Styled.a>
        <br />
      </div>
    </Grid>
  );
};

export default Header;
