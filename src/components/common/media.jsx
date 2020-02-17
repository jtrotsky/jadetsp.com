/** @jsx jsx */
import { jsx, Grid, Styled } from 'theme-ui';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faMicrophoneAlt, faBookOpen } from '@fortawesome/free-solid-svg-icons';

function Media({
  name, link, icon, description, textColor,
}) {
  const data = useStaticQuery(
    graphql`
    query {
      image01: imageSharp(fluid: {originalName: {eq:"img-media-01.jpg"}}) {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
      image02: imageSharp(fluid: {originalName: {eq:"img-media-02.jpg"}}) {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
      image03: imageSharp(fluid: {originalName: {eq:"img-media-03.jpg"}}) {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }`,
  );
  let iconString = icon;
  let thumbnailSrc = String;
  switch (name) {
    case 'TEDx':
      iconString = faPlay;
      thumbnailSrc = data.image01.fluid.GatsbyImageSharpFluid;
      break;
    case 'Article':
      iconString = faMicrophoneAlt;
      thumbnailSrc = data.image02.fluid.GatsbyImageSharpFluid;
      break;
    case 'Interview':
      iconString = faBookOpen;
      thumbnailSrc = data.image03.fluid.GatsbyImageSharpFluid;
      break;
    default:
      break;
  }
  return (
    <div
      sx={{
        maxWidth: '500px',
        my: 1,
      }}
    >
      <Styled.a
        href={link}
        role="link"
        tabIndex={0}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: textColor,
        }}
      >
        <hr />
        <Grid
          columns={[2, '1fr 2fr']}
          gap={-1}
          sx={{
            my: '16px',
          }}
        >
          <img
            src={thumbnailSrc}
            title={description}
            alt={name}
            sx={{
              alignSelf: 'center',
              justifySelf: 'center',
              borderRadius: '8px',
              height: ['80px', '80px', 'auto'],
              maxWidth: ['100px', '100px', '100%'],
              objectFit: 'cover',
            }}
          />
          <div
            sx={{
              variant: 'text.hardCaption',
              paddingLeft: '16px',
            }}
          >
            <FontAwesomeIcon icon={iconString} />
            &nbsp;
            {description}
          </div>
        </Grid>
        <hr />
      </Styled.a>
    </div>
  );
}

Media.defaultProps = {
  name: 'placeholder',
  icon: 'faPlay',
  description: 'Watch my TEDx talk.',
  textColor: 'text',
};

Media.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string.isRequired,
  icon: PropTypes.string,
  description: PropTypes.string,
  textColor: PropTypes.string,
};

export default Media;
