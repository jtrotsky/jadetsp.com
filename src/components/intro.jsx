/** @jsx jsx */
import { jsx, Grid } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
// import Circle from '../images/circle.svg';


const Intro = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        circleImage: file(relativePath: {eq:"circle.svg"}) {
          publicURL
        }
      }`,
  );

  return (
    <div>
      <Grid
        id="intro"
        sx={{
          marginTop: ['-60%', '-60%', 4],
          marginBottom: 2,
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
              src={data.circleImage.publicURL}
              title="Circle Illustration"
              alt="The background is an imperfect yellow circle"
              sx={{
                maxWidth: [null, null, '100%'],
                width: ['900px', '900px', '100%'],
                height: ['750px', '750px', '100%'],
              }}
            />
          </div>

          <div
            sx={{
              maxWidth: '840px',
              paddingTop: ['40%', '40%', '0px'],
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
