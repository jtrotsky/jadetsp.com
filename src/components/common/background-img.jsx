import React from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import Image from 'gatsby-image';

const BackgroundImg = ({ imageData, children }) => (
  <BackgroundImage
    fluid={imageData}
    style={{
      width: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'top',
      backgroundRepeat: '',
    }}
  >
    { children }
  </BackgroundImage>
);

BackgroundImg.propTypes = {
  imageData: PropTypes.instanceOf(Image).isRequired,
  children: PropTypes.node.isRequired,
};

export default BackgroundImg;
