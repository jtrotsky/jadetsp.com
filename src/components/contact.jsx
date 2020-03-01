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
          maxWidth: 350,
          maxHeight: 750,
          quality: 50,
          cropFocus: ATTENTION,
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
        overflow: 'hidden',
      }}
    >
      <div
        id="contact"
        sx={{
          maxWidth: '480px',
          marginTop: [null, null, 1],
          gridRow: [0, 0, 1],
          mx: 1,
        }}
      >
        <Styled.h1
          sx={{
            color: 'background',
            variant: ['text.chooChooBoi', 'text.chooChooBoi', 'text.bigBoi'],
          }}
        >
          What&apos;s next?
        </Styled.h1>
        <p
          sx={{
            variant: 'text.smolBoi',
            color: 'background',
          }}
        >
          My partner and I are relocating to London, and I&apos;m looking for a new team to
          create magic with. Want to get in touch?
        </p>

        <Styled.table
          sx={{
            maxWidth: '480px',
            width: '100%',
            my: 2,
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
                <Styled.a
                  sx={{
                    color: 'background',
                    textDecoration: 'underline',
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data.socialsYaml.twitter}
                >
                  @jadetsssp
                </Styled.a>
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
                <Styled.a
                  sx={{
                    color: 'background',
                    textDecoration: 'underline',
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data.socialsYaml.linkedin}
                >
                  linkedin/jadetsp
                </Styled.a>
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
                <Styled.a
                  sx={{
                    color: 'background',
                    textDecoration: 'underline',
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data.socialsYaml.medium}
                >
                  medium/jadetsp
                </Styled.a>
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
                <Styled.a
                  sx={{
                    color: 'background',
                    textDecoration: 'underline',
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data.socialsYaml.dribbble}
                >
                  dribbble/jadetsp
                </Styled.a>
              </Styled.td>
            </Styled.tr>
          </tbody>
        </Styled.table>
      </div>

      <div
        sx={{
          gridRow: [1, 1, null],
          overflow: 'hidden',
        }}
      >
        {/* <div
          sx={{
            position: 'relative',
          }}
        >
          <img
            src={data.smallSplatImage.publicURL}
            title="Small Split"
            alt="Small paint splat at the top right corner of Jade's Profile."
            sx={{
              zIndex: 1,
              display: ['none', 'none', 'block'],
              position: 'absolute',
              left: '-75%',
            }}
          />
        </div> */}
        <div>
          <Img
            fluid={data.jadeProfileImage.fluid}
            title="Jade Profile"
            alt="Jade smiling at the camera in front of a pink floral arch."
            objectPosition="center 25%"
            imgStyle={{ objectPosition: 'center 25%' }}
            sx={{
              my: [null, null, 0],
              position: ['absolute', 'absolute', 'relative'],
              maxHeight: ['500px', '500px', '750px'],
              maxWidth: '500px',
            }}
          />
        </div>
      </div>
      {/* <div
        sx={{
          position: 'relative',
        }}
      >
        <img
          src={data.bigSplatImage.publicURL}
          title="Big Splat"
          alt="Big paint splat at the bottom of Jade's Profile."
          sx={{
            display: ['none', 'none', 'block'],
            position: 'absolute',
            left: '60%',
            // bottom: '-100%',
            // right: '10%',
            // top: '100%',
          }}
        />
      </div> */}
    </Grid>
  );
};

export default Contact;
