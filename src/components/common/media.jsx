/** @jsx jsx */
import { jsx, Grid, Styled } from 'theme-ui';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faMicrophoneAlt, faBookOpen } from '@fortawesome/free-solid-svg-icons';

function Media({
  name, link, icon, description, textColor,
}) {
  const data = useStaticQuery(
    graphql`
    query {
      image01: imageSharp(fluid: {originalName: {eq:"img-media-01.jpg"}}) {
        fluid(
          maxWidth: 184,
          maxHeight: 93,
          quality: 50
        ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
      image02: imageSharp(fluid: {originalName: {eq:"img-media-02.jpg"}}) {
        fluid(
          maxWidth: 184,
          maxHeight: 93,
          quality: 50
        ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
      image03: imageSharp(fluid: {originalName: {eq:"img-media-03.jpg"}}) {
        fluid(
          maxWidth: 184,
          maxHeight: 93,
          quality: 50
        ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }`,
  );
  let iconString = icon;
  let thumbnailImage = Img;
  switch (name) {
    case 'Video':
      iconString = faPlay;
      thumbnailImage = data.image01.fluid;
      break;
    case 'Article':
      iconString = faMicrophoneAlt;
      thumbnailImage = data.image02.fluid;
      break;
    case 'Interview':
      iconString = faBookOpen;
      thumbnailImage = data.image03.fluid;
      break;
    default:
      break;
  }
  return (
    <div
      sx={{
        maxWidth: '400px',
        my: 1,
      }}
    >
      <hr />
      <Styled.a
        href={link}
        role="link"
        tabIndex={0}
        target="_blank"
        rel="preload noopener noreferrer"
        sx={{
          color: textColor,
        }}
      >
        <Grid
          columns={[2, '1fr 2fr']}
          gap={-1}
          sx={{
            my: '16px',
          }}
        >
          <Img
            fluid={thumbnailImage}
            title={description}
            alt={name}
            sx={{
              alignSelf: 'center',
              borderRadius: '8px',
              height: ['70%', '70%', '100%'],
              width: ['110px', '110px', '100%'],
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
      </Styled.a>
      <hr />
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
