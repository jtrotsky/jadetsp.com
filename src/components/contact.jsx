/** @jsx jsx */
import { jsx, Grid, Styled } from 'theme-ui';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import JadeProfile from '../images/img-jade-profile.jpg';
import BigSplat from '../images/splat-big.svg';
import SmallSplat from '../images/splat-small.svg';

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
          my: [null, null, 3],
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
          display: 'flex',
          justifyContent: ['center', 'center', 'left'],
          alignItems: 'center',
          gridRow: [1, 1, null],
          overflow: 'hidden',
        }}
      >
        <img
          src={SmallSplat}
          title="Small Split"
          alt="Small paint splat at the top right corner of Jade's Profile."
          sx={{
            position: 'absolute',
            alignSelf: 'flex-start',
            overflow: 'hidden',
            marginTop: 1,
            mx: '18%',
          }}
        />
        <img
          src={JadeProfile}
          title="Jade Profile"
          alt="Jade smiling at the camera in front of a pink floral arch."
          sx={{
            maxWidth: '1200px',
            maxHeight: '1400px',
            mx: '-85%',
            my: 1,
          }}
        />
        <img
          src={BigSplat}
          title="Big Splat"
          alt="Big paint splat at the bottom of Jade's Profile."
          sx={{
            position: 'absolute',
            alignSelf: 'flex-end',
            mx: '-15%',
            my: '-2.7%',
          }}
        />
      </div>
    </Grid>
  );
};

export default Contact;
