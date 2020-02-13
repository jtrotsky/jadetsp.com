/** @jsx jsx */
import { jsx, Grid } from 'theme-ui';

const Footer = () => (
  <Grid
    sx={{
      paddingTop: 1,
    }}
    // columns={[1, 1, 2]}
    columns={1}
    gap={0}
  >
    <div
      sx={{
        mx: 0,
        my: 0,
        variant: 'text.softCaption',
        opacity: 0.5,
        color: 'background',
      }}
    >
      <span>
        Fun fact #25: I have a collection of discontinued cash and coins from around the world.
        It&apos;s priceless.
      </span>

      <span
        sx={{
          // textAlign: 'right',
        }}
      >
        &nbsp;
        ©&nbsp;
        {new Date().getFullYear()}
        &nbsp;Jade Tan Swea Phin
      </span>
    </div>
  </Grid>
);

export default Footer;
