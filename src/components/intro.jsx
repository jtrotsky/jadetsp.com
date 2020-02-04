/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import circle from '../images/circle.svg';

const Intro = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }`,
  );

  return (
    <div>
      <div
        sx={{
          paddingTop: 6,
          display: 'flex',
          justifyContent: 'center',
        }}
      >

        <div
          sx={{
            width: 668,
            height: 616,
          }}
        >
          <img src={circle} alt="Circle" />
        </div>

        <div
          sx={{
            maxWidth: 840,
            maxHeight: 246,
            variant: 'text.chooChooBoi',
            alignSelf: 'center',
            position: 'absolute',
          }}
        >
          {data.site.siteMetadata.title}
        </div>
      </div>
    </div>
  );
};

export default Intro;
