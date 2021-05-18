/** @jsx jsx */
import { jsx, Grid, Themed } from 'theme-ui';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Img } from 'gatsby-plugin-image';

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
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          width: 500
          height: 800
          transformOptions: {
            cropFocus: ENTROPY
          }
        )
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
        <Themed.h1
          sx={{
            color: 'background',
            variant: ['text.chooChooBoi', 'text.chooChooBoi', 'text.bigBoi'],
          }}
        >
          On days off
        </Themed.h1>
        <p
          sx={{
            variant: 'text.smolBoi',
            color: 'background',
          }}
        >
          You&apos;ll find me pottering about with my plants, nerding out about history, or dipping
          fries into my ice cream. Want to get in touch?
        </p>

        <Themed.table
          sx={{
            maxWidth: '480px',
            width: '100%',
            my: 2,
            color: 'background',
            variant: 'text.pocketBoi',
          }}
        >
          <tbody>
            <Themed.tr
              sx={{
                borderTop: '1px solid white',
              }}
            >
              <Themed.td>
                Tweet me
              </Themed.td>
              <Themed.td
                sx={{
                  textAlign: 'right',
                }}
              >
                <Themed.a
                  sx={{
                    color: 'background',
                    textDecoration: 'underline',
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data.socialsYaml.twitter}
                >
                  @jadetsssp
                </Themed.a>
              </Themed.td>
            </Themed.tr>
            <Themed.tr>
              <Themed.td
                sx={{
                  variant: 'text.pocketBoi',
                  color: 'background',
                }}
              >
                See my work history
              </Themed.td>
              <Themed.td
                sx={{
                  textAlign: 'right',
                }}
              >
                <Themed.a
                  sx={{
                    color: 'background',
                    textDecoration: 'underline',
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data.socialsYaml.linkedin}
                >
                  linkedin/jadetsp
                </Themed.a>
              </Themed.td>
            </Themed.tr>
            <Themed.tr>
              <Themed.td
                sx={{
                  variant: 'text.pocketBoi',
                  color: 'background',
                  justifySelf: 'left',
                }}
              >
                Go in-depth
              </Themed.td>
              <Themed.td
                sx={{
                  textAlign: 'right',
                }}
              >
                <Themed.a
                  sx={{
                    color: 'background',
                    textDecoration: 'underline',
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data.socialsYaml.medium}
                >
                  medium/jadetsp
                </Themed.a>
              </Themed.td>
            </Themed.tr>
            <Themed.tr>
              <Themed.td>
                Get inspired
              </Themed.td>
              <Themed.td
                sx={{
                  textAlign: 'right',
                }}
              >
                <Themed.a
                  sx={{
                    color: 'background',
                    textDecoration: 'underline',
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data.socialsYaml.dribbble}
                >
                  dribbble/jadetsp
                </Themed.a>
              </Themed.td>
            </Themed.tr>
          </tbody>
        </Themed.table>
      </div>

      <div
        sx={{
          gridRow: [1, 1, null],
          overflow: 'hidden',
        }}
      >
        <div>
          <Img
            image={data.jadeProfileImage.gatsbyImageData}
            title="Jade Profile"
            alt="Jade smiling at the camera in front of a pink floral arch."
            objectPosition="center 25%"
            imgStyle={{ objectPosition: 'center 25%' }}
            sx={{
              my: [null, null, 0],
              marginBottom: [null, null, 16]
            }}
          />
        </div>
      </div>
    </Grid>
  );
};

export default Contact;
