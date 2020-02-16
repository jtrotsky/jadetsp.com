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
        marginTop: 2,
        justifyItems: 'center',
        position: ['relative', 'relative', null],
      }}
      columns={[2, 2, 3]}
    >

      <span
        as={NavLink}
        sx={{
          variant: 'text.signPost',
          cursor: 'pointer',
          outline: 'none',
        }}
        role="menuitem"
        onClick={() => scrollTo('#intro')}
        tabIndex={-1}
        onKeyPress={() => scrollTo('#intro')}
      >
        {data.site.siteMetadata.author}
      </span>

      <div
        sx={{
          variant: 'text.hardCaption',
          width: '350px',
          display: ['none', 'none', 'block'],
        }}
      >
        {data.site.siteMetadata.statusUpdate}
        <span
          sx={{
            textDecoration: 'underline',
            cursor: 'pointer',
            color: 'plum',
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
        sx={{
          variant: 'text.signPost',
        }}
      >
        <Styled.a
          as={NavLink}
          role="menuitem"
          onClick={() => scrollTo('#intro')}
          tabIndex={0}
          onKeyPress={() => scrollTo('#intro')}
        >
          About
        </Styled.a>
        <br />
        <Styled.a
          as={NavLink}
          role="menuitem"
          onClick={() => scrollTo('#my-work')}
          tabIndex={0}
          onKeyPress={() => scrollTo('#my-work')}
        >
          Work
        </Styled.a>
        <br />
        <Styled.a
          as={NavLink}
          role="menuitem"
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
