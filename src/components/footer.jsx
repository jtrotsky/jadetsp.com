/** @jsx jsx */
import { jsx, Grid } from 'theme-ui';

const Footer = () => (
  <Grid
    sx={{
      paddingTop: 5,
      textAlign: 'center',
      backgroundColor: 'green',
    }}
    columns={[1, 1, 2]}
    gap={0}
  >
    <span
      sx={{
        variant: 'text.softCaption',
        opacity: 0.5,
        color: 'background',
        textAlign: 'left',
        mx: 1,
        paddingLeft: 1,
        marginBottom: '16px',
      }}
    >
      Fun fact #25: I have a collection of discontinued cash and coins from around the world.
      It&apos;s priceless.
    </span>

    <span
      sx={{
        variant: 'text.softCaption',
        opacity: 0.5,
        color: 'background',
        textAlign: 'left',
        mx: 2,
      }}
    >
      ©&nbsp;
      {new Date().getFullYear()}
      &nbsp;Jade Tan Swea Phin
    </span>
  </Grid>
);

export default Footer;
