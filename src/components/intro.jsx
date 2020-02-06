/** @jsx jsx */
import { jsx, Grid } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import circle from '../images/circle.svg';

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
        paddingTop: [1, 1, 6],
        justifyItems: 'center',
        my: 1,
      }}
      columns={1}
    >
      <div
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div>
          <img
            src={circle}
            alt="Circle"
            sx={{
              maxWidth: '100%',
              maxHeight: '100%',
            }}
          />
        </div>

        <div
          sx={{
            maxWidth: 840,
            maxHeight: 246,
            variant: ['text.pugBoi', 'text.pugBoi', 'text.chooChooBoi'],
            alignSelf: 'center',
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
