/** @jsx jsx */
import { jsx } from 'theme-ui';

const Footer = () => (
  <footer
    sx={{
      variant: 'text.softCaption',
      opacity: 0.5,
    }}
  >
    <span>
      Fun fact #25: I have a collection of discontinued cash and coins from around the world.
      It&apos;s priceless.
      ©
      {new Date().getFullYear()}
      Jade Tan Swea Phin
    </span>
  </footer>
);

export default Footer;
