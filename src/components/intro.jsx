/** @jsx jsx */
import { jsx, Grid, Styled } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';


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
                width: ['800px', '800px', '100%'],
                height: ['800px', '800px', '100%'],
              }}
            />
          </div>

          <Styled.h2
            sx={{
              maxWidth: '840px',
              width: ['360px', '360px', '100%'],
              paddingTop: [2, 2, '0px'],
              variant: ['text.pugBoi', 'text.pugBoi', 'text.chooChooBoi'],
              position: 'absolute',
              mx: ['8px', '8px', 1],
            }}
          >
            {data.site.siteMetadata.title}
          </Styled.h2>
        </div>
      </Grid>
    </div>
  );
};

export default Intro;
