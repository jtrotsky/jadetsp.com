/** @jsx jsx */
import { jsx, Grid } from 'theme-ui';

const Footer = () => (
  <Grid
    columns={[1, 1, '2fr 1fr']}
    gap={[0, 0, -1]}
  >
    <span
      sx={{
        marginLeft: 0,
        marginBottom: [null, null, 0],
        variant: 'text.hardCaption',
        opacity: 0.5,
        color: 'background',
      }}
    >
      Fun fact #25: I have a collection of discontinued coins from around the world.
      It&apos;s priceless.
    </span>

    <span
      sx={{
        mx: [0, 0, '0px'],
        marginBottom: 0,
        variant: 'text.hardCaption',
        opacity: 0.5,
        color: 'background',
      }}
    >
      ©&nbsp;
      {new Date().getFullYear()}
      &nbsp;Jade Tan Swea Phin
    </span>
  </Grid>
);

export default Footer;
