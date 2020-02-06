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
            email
            resume
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
              variant: 'text.pugBoi',
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
                Let&apos;s chat
              </td>
              <td>
                <a
                  sx={{
                    color: 'background',
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:{data.site.siteMetadata.email}"
                >
                  sweaphin@gmail.com
                </a>
              </td>
            </tr>
            <tr>
              <td>
                Tweet at me
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
                See my resume
              </td>
              <td>
                <a
                  sx={{
                    color: 'background',
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data.site.siteMetadata.resume}
                >
                  jadetansweaphin
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
