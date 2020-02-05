/** @jsx jsx */
import { jsx, Grid } from 'theme-ui';

const Footer = () => (
  <Grid
    sx={{
      paddingTop: 5,
      textAlign: 'center',
      backgroundColor: 'green',
    }}
    columns={2}
    gap={0}
  >
    <div
      sx={{
        variant: 'text.softCaption',
        opacity: 0.5,
        color: 'background',
      }}
    >
      <span>
        Fun fact #25: I have a collection of discontinued cash and coins from around the world.
        It&apos;s priceless.
      </span>

      <span>
        ©&nbsp;
        {new Date().getFullYear()}
        &nbsp;Jade Tan Swea Phin
      </span>
    </div>
  </Grid>
);

export default Footer;
