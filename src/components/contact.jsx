/** @jsx jsx */
import { jsx, Grid } from 'theme-ui';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// import blob from '../images/blob.svg';

const Contact = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            medium
            dribbble
            twitter
          }
        }
      }`,
  );

  return (
    <div
      sx={{
        paddingTop: [2, 2, 3],
      }}
    >
      {/* <div
        sx={{
          paddingTop: 5,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img
          src={blob}
          alt="Blob"
          sx={{
            maxWidth: '100%',
            maxHeight: '100%',
          }}
        />
      </div> */}
      <Grid
        id="contact"
        sx={{
          alignItems: 'center',
          backgroundColor: 'green',
        }}
        columns={[1, 1, 2]}
        gap={0}
      >
        <div
          sx={{
            maxWidth: '540px',
            mx: 1,
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
              variant: 'text.pugBoi',
              color: 'background',
            }}
          >
            My partner and I are relocating to London, and I&apos;m looking for a new team to
            create magic with.
          </p>
        </div>
        <Grid
          sx={{
            variant: 'text.pocketBoi',
            color: 'background',
            mx: 1,
          }}
          columns={[1, 1, 2]}
        >
          <div>
            Let&apos;s chat
            <div>
              {data.site.siteMetadata.twitter}
            </div>
          </div>
          <div>
            Tweet at me
            <div>
              {data.site.siteMetadata.twitter}
            </div>
          </div>
          <div>
            See my resume
            <div>
              {data.site.siteMetadata.twitter}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
