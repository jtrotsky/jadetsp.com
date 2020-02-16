/** @jsx jsx */
import { jsx, Grid } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import Circle from '../images/circle.svg';
import Header from './header';


const Intro = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }`,
  );

  return (
    <div>
      <Header />
      <Grid
        id="intro"
        sx={{
          my: [null, null, 3],
          marginTop: ['-60%', '-60%', null],
        }}
        columns={1}
      >
        <div
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          <div>
            <img
              src={Circle}
              title="Circle Illustration"
              alt="The background is an imperfect yellow circle in screen centre"
              sx={{
                maxWidth: [null, null, '100%'],
                width: ['900px', '900px', null],
                height: ['900px', '900px', null],
              }}
            />
          </div>

          <div
            sx={{
              maxWidth: '840px',
              paddingTop: ['25%', '25%', null],
              variant: ['text.pugBoi', 'text.pugBoi', 'text.chooChooBoi'],
              position: 'absolute',
              mx: ['8px', '8px', 1],
            }}
          >
            {data.site.siteMetadata.title}
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default Intro;
