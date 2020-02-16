/** @jsx jsx */
import { jsx, Grid, Styled } from 'theme-ui';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faMicrophoneAlt, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import firstMediaImage from '../images/img-media-01.jpg';
import secondMediaImage from '../images/img-media-02.jpg';
import thirdMediaImage from '../images/img-media-03.jpg';

function Media({
  name, link, icon, description, textColor,
}) {
  let iconString = icon;
  let thumbnail = String;
  switch (String(iconString)) {
    case 'faPlay':
      iconString = faPlay;
      thumbnail = firstMediaImage;
      break;
    case 'faMicrophoneAlt':
      iconString = faMicrophoneAlt;
      thumbnail = secondMediaImage;
      break;
    case 'faBookOpen':
      iconString = faBookOpen;
      thumbnail = thirdMediaImage;
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
            src={thumbnail}
            title={name}
            alt={description}
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
