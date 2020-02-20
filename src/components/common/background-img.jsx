import React from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
// import Img from 'gatsby-image';

const BackgroundImg = ({ image, children }) => (
  <BackgroundImage
    fluid={image}
    style={{
      width: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'top',
      backgroundRepeat: '',
      backgroundColor: '#956850',
    }}
  >
    { children }
  </BackgroundImage>
);

BackgroundImg.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  image: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default BackgroundImg;
