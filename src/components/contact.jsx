/** @jsx jsx */
import { jsx, Grid, Styled } from 'theme-ui';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Contact = () => {
  const data = useStaticQuery(
    graphql`
    query {
      socialsYaml {
        dribbble
        linkedin
        medium
        twitter
      }
      jadeProfileImage: imageSharp(fluid: {originalName: {eq:"img-jade-profile.jpg"}}) {
        fluid(
          maxWidth: 800,
          maxHeight: 1200,
          quality: 75,
          cropFocus: ATTENTION
        ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
      bigSplatImage: file(relativePath: {eq:"splat-big.svg"}) {
        publicURL
      }
      smallSplatImage: file(relativePath: {eq:"splat-small.svg"}) {
        publicURL
      }
    }`,
  );

  return (
    <Grid
      columns={[1, 1, 2]}
      gap={1}
      sx={{
        mx: 1,
      }}
    >
      <div
        id="contact"
        sx={{
          maxWidth: '480px',
          marginTop: [null, null, 1],
          gridRow: [0, 0, 1],
        }}
      >
        <h1
          sx={{
            variant: 'text.bigBoi',
            color: 'background',
          }}
        >
          What&apos;s next?
        </h1>
        <p
          sx={{
            variant: 'text.smolBoi',
            color: 'background',
            paddingTop: 0,
          }}
        >
          My partner and I are relocating to London, and I&apos;m looking for a new team to
          create magic with.
        </p>

        <Styled.table
          id="contact"
          sx={{
            maxWidth: '480px',
            width: '100%',
            my: 1,
            color: 'background',
            variant: 'text.pocketBoi',
          }}
        >
          <tbody>
            <Styled.tr
              sx={{
                borderTop: '1px solid white',
              }}
            >
              <Styled.td>
                Tweet me
              </Styled.td>
              <Styled.td
                sx={{
                  textAlign: 'right',
                }}
              >
                <a
                  sx={{
                    color: 'background',
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data.socialsYaml.twitter}
                >
                  @jadetsssp
                </a>
              </Styled.td>
            </Styled.tr>
            <Styled.tr>
              <Styled.td
                sx={{
                  variant: 'text.pocketBoi',
                  color: 'background',
                }}
              >
                See my work history
              </Styled.td>
              <Styled.td
                sx={{
                  textAlign: 'right',
                }}
              >
                <a
                  sx={{
                    color: 'background',
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data.socialsYaml.linkedin}
                >
                  linkedin/jadetsp
                </a>
              </Styled.td>
            </Styled.tr>
            <Styled.tr>
              <Styled.td
                sx={{
                  variant: 'text.pocketBoi',
                  color: 'background',
                  justifySelf: 'left',
                }}
              >
                Go in-depth
              </Styled.td>
              <Styled.td
                sx={{
                  textAlign: 'right',
                }}
              >
                <a
                  sx={{
                    color: 'background',
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data.socialsYaml.medium}
                >
                  medium/jadetsp
                </a>
              </Styled.td>
            </Styled.tr>
            <Styled.tr>
              <Styled.td>
                Get inspired
              </Styled.td>
              <Styled.td
                sx={{
                  textAlign: 'right',
                }}
              >
                <a
                  sx={{
                    color: 'background',
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data.socialsYaml.dribbble}
                >
                  dribbble/jadetsp
                </a>
              </Styled.td>
            </Styled.tr>
          </tbody>
        </Styled.table>
      </div>

      <div
        sx={{
          gridRow: [1, 1, null],
          overflow: 'hidden',
          // maxHeight: '800px',
          my: 0,
        }}
      >
        {/* <img
          src={data.smallSplatImage.publicURL}
          title="Small Split"
          alt="Small paint splat at the top right corner of Jade's Profile."
          sx={{
            display: ['none', 'none', 'block'],
            position: 'absolute',
            // top: 0,
            // left: '50%',
          }}
        /> */}
        <div>
          <Img
            fluid={data.jadeProfileImage.fluid}
            title="Jade Profile"
            alt="Jade smiling at the camera in front of a pink floral arch."
            sx={{
              objectPosition: 'top',
              objectFit: 'cover',
              height: '750px',
              width: '800px',
              marginLeft: '-40%',
            }}
          />
        </div>
      </div>
    </Grid>
  );
};

export default Contact;
