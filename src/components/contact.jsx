/** @jsx jsx */
import { jsx, Grid } from 'theme-ui';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import blob from '../images/blob.svg';

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
    <div>
      <div
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
      </div>
      <Grid
        sx={{
          paddingTop: 2,
          alignItems: 'center',
          backgroundColor: 'green',
          height: '800px',
          paddingLeft: 2,
        }}
        columns={[1, 1, 2]}
        gap={0}
      >
        <div
          sx={{
            maxWidth: '540px',
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
        <div
          sx={{
            variant: 'text.smolBoi',
            color: 'background',
          }}
        >
          {data.site.siteMetadata.twitter}
        </div>
      </Grid>
    </div>
  );
};

export default Contact;
