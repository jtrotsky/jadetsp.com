/** @jsx jsx */
import { jsx, Grid } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import Circle from '../images/circle.svg';


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
    <Grid
      id="intro"
      sx={{
        my: [1, 1, 3],
      }}
      columns={1}
    >
      <div
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div>
          <img
            src={Circle}
            title="Circle Illustration"
            alt="The background is an imperfect yellow circle in screen centre"
            sx={{
              maxWidth: '100%',
            }}
          />
        </div>

        <div
          sx={{
            maxWidth: '840px',
            variant: ['text.pugBoi', 'text.pugBoi', 'text.chooChooBoi'],
            position: 'absolute',
            mx: 1,
          }}
        >
          {data.site.siteMetadata.title}
        </div>
      </div>
    </Grid>
  );
};

export default Intro;
