import React from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';

const BackgroundImg = ({ image, children }) => (
  <BackgroundImage
    fluid={image}
    style={{
      backgroundPosition: 'top',
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
