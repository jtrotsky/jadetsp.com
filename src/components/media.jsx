/** @jsx jsx */
import { jsx, Grid, Styled } from 'theme-ui';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
// faMicrophoneAlt, faBookOpen

const Media = ({
  name,
  thumbnail,
  link,
  // icon,
  description,
}) => (

  <Styled.a
    href={link}
    role="link"
    tabIndex={0}
  >
    <hr />
    <Grid
      columns={[2, '1fr 2fr']}
      gap={1}
    >
      <img
        src={`./src/images/${thumbnail}.jpg`}
        title={name}
        alt=""
        sx={{
          // maxWidth: '60px',
          // maxHeight: '40px',
        }}
      />
      <div
        sx={{
          variant: 'text.hardCaption',
          color: 'text',
        }}
      >
        <FontAwesomeIcon icon={faPlay} />
        &nbsp;
        {description}
      </div>
    </Grid>
    <hr />
  </Styled.a>
);

Media.defaultProps = {
  name: 'placeholder',
  // icon: 'faPlay',
  description: 'Watch my TEDx talk.',
};

Media.propTypes = {
  name: PropTypes.string,
  thumbnail: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  // icon: PropTypes.string,
  description: PropTypes.string,
};

export default Media;
