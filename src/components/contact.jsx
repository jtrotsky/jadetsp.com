/** @jsx jsx */
import { jsx, Grid } from 'theme-ui';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Contact = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            twitter
            linkedin
            medium
            dribbble
          }
        }
      }`,
  );

  return (
    <div
      sx={{
        mx: 1,
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
        }}
        columns={[1, 1, 2]}
        gap={-1}
      >
        <div
          sx={{
            maxWidth: '480px',
            marginTop: 2,
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
        </div>
      </Grid>

      <Grid
        id="contact"
        sx={{
          backgroundColor: 'green',
        }}
        columns={[1, 1, 2]}
        gap={0}
      >

        <div />
        <Grid
          sx={{
            py: '8px',
          }}
          columns={[1, 1, 2]}
          gap={-1}
        >

          <span
            sx={{
              variant: 'text.pocketBoi',
              color: 'background',
              justifySelf: 'left',
            }}
          >
            Tweet me
          </span>
          <span
            sx={{
              variant: 'text.pocketBoi',
              color: 'background',
              justifySelf: ['left', 'left', 'right'],
            }}
          >
            <a
              sx={{
                color: 'background',
              }}
              target="_blank"
              rel="noopener noreferrer"
              href={data.site.siteMetadata.twitter}
            >
              @jadetsssp
            </a>
          </span>
        </Grid>

        <div />
        <Grid
          sx={{
            py: '8px',
          }}
          columns={[1, 1, 2]}
          gap={-1}
        >
          <span
            sx={{
              variant: 'text.pocketBoi',
              color: 'background',
              justifySelf: 'left',
            }}
          >
            Connect on LinkedIn
          </span>
          <span
            sx={{
              variant: 'text.pocketBoi',
              color: 'background',
              justifySelf: ['left', 'left', 'right'],
            }}
          >
            <a
              sx={{
                color: 'background',
                justifySelf: ['left', 'left', 'right'],
              }}
              target="_blank"
              rel="noopener noreferrer"
              href={data.site.siteMetadata.linkedin}
            >
              linkedin/jadetsp
            </a>
          </span>
        </Grid>

        <div />
        <Grid
          sx={{
            // borderTop: '1px solid white',
            py: '8px',
          }}
          columns={[1, 1, 2]}
          gap={-1}
        >
          <span
            sx={{
              variant: 'text.pocketBoi',
              color: 'background',
              justifySelf: 'left',
            }}
          >
            Go in-depth on Medium
          </span>
          <span
            sx={{
              variant: 'text.pocketBoi',
              color: 'background',
              justifySelf: ['left', 'left', 'right'],
            }}
          >
            <a
              sx={{
                color: 'background',
              }}
              target="_blank"
              rel="noopener noreferrer"
              href={data.site.siteMetadata.medium}
            >
              jadetansweaphin
            </a>
          </span>
        </Grid>

        <div />
        <Grid
          sx={{
            // borderTop: '1px solid white',
            // borderBottom: '1px solid white',
            py: '8px',
          }}
          columns={[1, 1, 2]}
          gap={-1}
        >
          <span
            sx={{
              variant: 'text.pocketBoi',
              color: 'background',
              justifySelf: 'left',
            }}
          >
            Get inspired on Dribbble
          </span>
          <span
            sx={{
              variant: 'text.pocketBoi',
              color: 'background',
              justifySelf: ['left', 'left', 'right'],
            }}
          >
            <a
              sx={{
                color: 'background',
              }}
              target="_blank"
              rel="noopener noreferrer"
              href={data.site.siteMetadata.dribbble}
            >
              jadetsp
            </a>
          </span>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
