/** @jsx jsx */
import { jsx } from 'theme-ui';

const Footer = () => (
  <footer
    sx={{
      variant: 'text.softCaption',
      opacity: 0.5,
      paddingTop: 5,
      textAlign: 'center',
    }}
  >
    <span>
      Fun fact #25: I have a collection of discontinued cash and coins from around the world.
      It&apos;s priceless.
      ©&nbsp;
      {new Date().getFullYear()}
      &nbsp;Jade Tan Swea Phin
    </span>
  </footer>
);

export default Footer;
