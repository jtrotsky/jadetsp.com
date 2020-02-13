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
        gap={-1}
      >
        <div
          sx={{
            maxWidth: '460px',
            marginTop: 2,
            marginBottom: 1,
            mx: 2,
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
          alignItems: 'center',
          backgroundColor: 'green',
        }}
        columns={[1, 1, 2]}
        gap={0}
      >
        <div />
        <table
          sx={{
            variant: 'text.pocketBoi',
            color: 'background',
            mx: 2,
          }}
          columns={[1, 1, 2]}
          gap={0}
        >
          <tbody>
            <tr>
              <td>
                Tweet me
              </td>
              <td>
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
              </td>
            </tr>
            <tr>
              <td>
                Connect on LinkedIn
              </td>
              <td>
                <a
                  sx={{
                    color: 'background',
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data.site.siteMetadata.linkedin}
                >
                  linkedin/jadetsp
                </a>
              </td>
            </tr>
            <tr>
              <td>
                Go in-depth on Medium
              </td>
              <td>
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
              </td>
            </tr>
            <tr>
              <td>
                Get inspired on Dribbble
              </td>
              <td>
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
              </td>
            </tr>
          </tbody>
        </table>
      </Grid>
    </div>
  );
};

export default Contact;
