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
      sx={{
        paddingTop: 6,
        justifyItems: 'center',
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
            variant: 'text.chooChooBoi',
            alignSelf: 'center',
            position: 'absolute',
          }}
        >
          {data.site.siteMetadata.title}
        </div>
      </div>
    </Grid>
  );
};

export default Intro;
